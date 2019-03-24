<?php

namespace App\Http\Middleware;

use Closure;

class MyCors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $domains = ['http://localhost:8080'];

        if (isset($request->server()['HTTP_ORIGIN'])) {

            $origin = $request->server()['HTTP_ORIGIN'];

            if (in_array($origin, $domains)) {

                header('Access-Control-Allow-Origin: ' . $origin);

               // header('Access-Control-Allow-Headers: *');
               header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Requested-With');
            }

        }

        // return $next($request)
        // ->header('Access-Control-Allow-Origin', '*')
        // ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        // ->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Language');
        return $next($request);

        /********************
        /* Alternative Way
        /*
        /********************
         *
        */

    }
}
