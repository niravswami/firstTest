<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Client;

class RegisterController extends Controller
{
    use IssueTokenTrait;

    private $client;

    public function __construct()
    {
        $this->client = Client::find(2);
    }


    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [

            'firstName' => 'required|max:255',

            'lastName' => 'required|max:255',

            'email' => 'required|email|string|unique:users',

            'password' => 'required|min:6',

            'gender' => 'required',

            'confirm_password' => 'required|same:password'

            ]);

                        // 'date_of_birth' => 'required',

                        // 'mobile_number' => 'required',

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = new User;

        $user->first_name = $request->firstName ;

        $user->last_name = $request->lastName ;

        $user->email = $request->email ;

        $user->password = bcrypt($request->password) ;

        $user->gender = $request->gender ;

        if($request->date_of_birth) {

            $user->date_of_birth = $request->date_of_birth ;

        } else {

            $user->date_of_birth = null ;
        }

        if($request->mobile_number) {

            $user->mobile_number = $request->mobile_number ;

        } else {

            $user->mobile_number = null ;
        }


        $user->save();

        return $this->issueToken($request, 'password');

        // $user = User::create([

        //     'first_name' => $request->firstName,

        //     'last_name' => $request->lastName,

        //     'email' => $request->email,

        //     'password' => bcrypt($request->password),

        //     'date_of_birth' => $request->date_of_birth,

        //     'mobile_number' => $request->mobile_number,

        //     'gender' => $request->gender,

        // ]);


        /* $params = [
            'grant_type' => 'password',
                'client_id' => $this->client->id,
                'client_secret' => $this->client->secret,
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '*',
        ];

        $request->request->add($params);

        $proxy = Request::create('oauth/token', 'POST') ;

        return Route::dispatch($proxy); */
    }
}
