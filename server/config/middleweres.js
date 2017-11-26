'use strict';

 exports.isAdmin = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}else{
		//res.send('Acceso Denegado por Favor Inicie Sesion');
		req.flash('info','Acceso Denegado');
		res.redirect('/')
	}


} ;
