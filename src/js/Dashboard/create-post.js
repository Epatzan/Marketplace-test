"use strict";
var $ = require('jquery');
exports.sendPost = function(data){
	var params = $.ajax({
		url: "/dashboard/create",
		method: "POST",
		data: data
	});
	return params;
};
