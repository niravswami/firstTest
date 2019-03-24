<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Validator;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    use IssueTokenTrait;

    private $client;

    public function __construct()
    {
        $this->client = Client::find(2);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'username' => 'required',

            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = User::where('email', $request->username)->first();

        if(!$user) {
            // return response(['status' => 'error', 'message' => 'User not found!']);
            return response(['status' => 'error', 'message' => 'invalid Email or Password']);
        }

        if(Hash::check($request->password, $user->password)) {

            return $this->issueToken($request, 'password');

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

        } else {

            return (['status' => 'error', 'message' => 'invalid Email or Password']);
        }

    }

    public function refresh(Request $request)
    {
        $this->validate($request, [
            'refresh_token' => 'required'
        ]);

        return $this->issueToken($request, 'refresh_token');

        /* $params = [
            'grant_type' => 'refresh_token',
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

    public function logout(Request $request)
    {
        $accessToken = Auth::user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update(['revoked' => true]);

            $accessToken->revoke();

            return response()->json(['message' => 'Logout Successfully'], 200);
    }

}
