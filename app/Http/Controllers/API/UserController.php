<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use phpseclib\Crypt\Hash;
use GuzzleHttp\Client;
use App\User;
use Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if( auth('api')->user()) {

        }
        return new UserCollection(User::latest()->paginate(10));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user= new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        $http = new Client;


        $response = $http->post('/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'Bp4yYFaIpbG9n8oJaWf6zPMc1FvQ3z3YCF0jnnSD',
                'Access-Control-Allow-Credentials'=> true,
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '',
            ],
            ]);
            $user->save();
        return response(['data' => json_decode((string) $response->getBody(), true)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (auth('api')->user()) {

            return User::find($id);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (auth('api')->user()->id == $id) {

            $user = auth('api')->user();

            /*----------------------------------------------
            *       Name Update
            *-----------------------------------------------
            *
            */

            if ($request->ifNum == 1) {

                $validator = Validator::make($request->all(), [
                    'firstName' => 'required',
                    'lastName' => 'required',
                ]);

                if ($validator->fails()) {
                    return response()->json(['error'=>$validator->errors()], 401);
                }

                $user->first_name = $request->firstName;
                $user->last_name = $request->lastName;

                $user->save();


                return response()->json(['data' =>$user,  200]);



                /*----------------------------------------------
                *       Gender Update
                *-----------------------------------------------
                *
                */

            } else if ($request->ifNum == 2) {

                $validator = Validator::make($request->all(), [
                    'gender' => 'required',
                ]);

                if ($validator->fails()) {
                    return response()->json(['error'=>$validator->errors()], 401);
                }

                $user->gender = $request->gender;

                $user->save();


                return response()->json(['data' =>$user,  200]);

            } else if ($request->ifNum == 3) {

                $validator = Validator::make($request->all(), [
                    'email' => 'required',
                ]);

                if ($validator->fails()) {
                    return response()->json(['error'=>$validator->errors()], 401);
                }

                $user->email = $request->email;

                $user->save();


                return response()->json(['data' =>$user,  200]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(){
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else{
            return response()->json(['error'=>'Unauthorised'], 401);
        }
    }


    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            //'c_password' => 'required|same:password',
        ]);


        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }


        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;


        return response()->json(['success'=>$success], $this->successStatus);
    }
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
/*     public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required', */
            //'c_password' => 'required|same:password',
       // ]);


        /* if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = User::firstOrNew(['email' => $request->email]);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password =  bcrypt($request->password);
        $user->save();

        $http = new GuzzleHttp\Client;

        $response = $http->post('http://localhost:8000/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'ckaJtaPVyw7vNoBZginR0XWKzCeCYok3AonFtc9v',
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '',
            ],
        ]);


        return response([ 'data' => json_decode((string) $response->getBody(), true)]) ;
    } */
}
