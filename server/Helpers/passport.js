/*'use strict';
var LocalStrategy = require('passport-local').Strategy;



module.exports = function(passport, config){
	var User = require(config.SystemPath + '/Modules/User/model/Usuario.js');
	passport.serializeUser(function(user, done){
		done(null,  user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

	//Local Signup

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback : true
	}, function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({'email':email}, function(err, user){
				if(err){
					return done(err);
				}
				if(user){
					return done(null, false, req.flash('sigupMessage', 'That email is already taken.'));
				}else{
					var newUser = new User();
					newUser.name = req.body.name;
					newUser.email = req.body.email;
					newUser.pass = newUser.generateHash(password);
					newUser.save(function(err){
						if(err){
							throw err;
						}
						return done(null, newUser);
					});
				}
			});
		});
	}));

	//Login
	passport.use('local-login',new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, done){
		User.findOne({'email' : email},function(err, user){
			if(err)
				return done(err);
			if(!user)
				return done(null, false, req.flash('loginMessage','No user found.'));
			if(!user.validPassword(password))
				return done(null, false, req.flash('loginMessage','Opps! Wrong password'));
			return done(null, user);
		});
	}));

};*/
