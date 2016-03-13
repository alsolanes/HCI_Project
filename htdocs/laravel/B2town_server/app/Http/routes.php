<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use App\Photo;
Route::get('/', function () {
    return Response::json(Photo::all());
    //return view('welcome');
});

Route::get('captions/{id}', function($id){
	return Response::json(Photo::find($id)->captions()->get());
});

Route::post('captions',function(){
	$input = Input::json();
	$rules = array(
		'caption' => 'required|min:3',
		'photo_id' => 'required|exists:photos,id'
		);

	$validation = Validator::make($input, $rules);

	if ($validation->fails()){
		return Response::json($validation->errors->all());
	}else{
		$caption = new Caption;

		$caption->caption = $input->caption;
		$caption->photo_id = $input->photo_id;

		$caption->save();
		return Response::eloquent($caption);
	}
});
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
