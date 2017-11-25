'use stric';

var express = require('express');
var  multer = require ('multer');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var helmet = require('helmet');
var http = require('http');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var hbs = require('express-hbs');
var config = require('../config');
var passport = require('passport');
var morgan = require('morgan');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var hbs = require('express-hbs');
//require('./Helpers/passport')(passport,config);

global._config = config;

var app = express();


//Multer
//app.use(multer({dest: './public/uploads'}));





//Hbs
app.engine('hbs',hbs.express4({
	partialsDir : __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');
require('./config/hbs_helpers')(hbs);


//Express
app.use(cors());
app.use(morgan('combined'));
app.use(cookieParser());

//Aplicacion parse JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type:'aplication/json'}));

//Static Content
app.use(express.static(config.publicDir));



//Passport
app.use(session({
	secret:'2a521468zWxESAVbkahsLjah32',
	saveUninitialized:true,
	resave:true,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(helmet.hidePoweredBy());

require('./Helpers/modules')(app,config);



if(config.env  === 'production'){
  app.use(function(req, res, next){
    var err = new Error('not found');
    err.status = 404;
    next(err);
  });
}
if(config.env === 'development'){

}
console.log(process.env.NODE_ENV);
module.exports = app;
