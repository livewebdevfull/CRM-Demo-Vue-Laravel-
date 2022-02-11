<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployInfo extends Model
{
    protected $table = 'client_employ_infos';

	/**
	 * The attributes to be fillable from the model.
	 *
	 * A dirty hack to allow fields to be fillable by calling empty fillable array
	 *
	 * @var array
	 */

	protected $fillable = [];
	protected $guarded = ['id'];
}
