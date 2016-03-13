<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Photo extends Model {
	public $timestamps = true;

	public function captions(){
		return $this->hasmany("\App\Caption");
	}
}

?>