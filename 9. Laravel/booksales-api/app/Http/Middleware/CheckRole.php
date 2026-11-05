<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        try {
            // Ambil user dari token JWT
            $user = JWTAuth::parseToken()->authenticate();
            
            // Cek apakah role user ada di dalam daftar role yang diizinkan
            if (!in_array($user->role, $roles)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Unauthorized: Anda tidak memiliki akses'
                ], 403);
            }
            
            return $next($request);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Token is invalid or expired'
            ], 401);
        }
    }
}