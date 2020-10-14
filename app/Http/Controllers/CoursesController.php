<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class CoursesController extends BaseController
{
    public function index (){
        return response()->json(["ReactJs","Laravel", "VueJS"], 200);
    }
}
