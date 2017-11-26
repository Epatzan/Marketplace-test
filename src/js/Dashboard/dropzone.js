"use strict";



exports.simpleImagen = function(){
	Dropzone.options.imagenPost ={
		maxFiles:1,
		success:function(file, responseText){
			$('.js-imagen').val(responseText);

		}
	};
};
