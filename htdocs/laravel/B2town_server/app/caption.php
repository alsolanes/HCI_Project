<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Caption extends Model {

	public $timestamps = true;

	public function photos(){
		return $this->belongs_to("Photo");
	}
}

?>