'use strict';

var express = require('express');
var multer = require('multer');
var  moment = require('moment');
var fs  = require('fs');
var routes = express.Router();
var acl = require(_config.SystemPath + '/config/middleweres');
var passport = require('passport');
var mysql = require('mysql');
var upload = multer({dest: './public/uploads'});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Catalogo"
});

routes.get('/imagen',function (req, res){
	res.render('Dashboard/imagen-post',{
		title: 'create',
		layout: 'layout/dashboard'
	});
});
routes.post('/imagen', upload.single('file'),function (req, res){

});

//

routes.get('/',function (req, res){
	res.render('Dashboard/index_dashboard',{
		title:'Dashboard',
		 layout: 'layout/dashboard'
	});

});
//routh de Consulta
routes.get('/innovation',function (req , res){
	res.render('Dashboard/dashboard-consulta',{
		title:'Consulta de Productos',
		layout:'layout/dashboard'
	});

});
routes.post('/innovation',function (req , res){
  con.connect(function(err) {
  if (err) throw err;
 //con.query("SELECT * FROM Productos", function (err, result, fields) {
 con.query("SELECT Nombre FROM Productos WHERE iD = 4", function (err, result, fields) {
    if (err) throw err;
   console.log(result);
    });
  });
});
//routh de estadisicas
routes.get('/statistics',function (req, res){
		res.render('Dashboard/dashboard-statistics',{
		title:'Estadisticas',
		layout:'layout/dashboard'
	});

});
//routh de media
routes.get('/media',function (req, res){
		res.render('Dashboard/dashboard-media',{
		title:'Seccion de media',
		layout:'layout/dashboard'
	});

});

routes.get('/create',function (req, res){
	res.render('Dashboard/create-post',{
		title: 'create',
		layout: 'layout/dashboard'
	});
});
routes.post('/create',function (req, res){

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	/*	con.query("CREATE DATABASE Catalogo", function (err, result) {
	 if (err) throw err;
	 console.log("Database created");
 });*/


  //var sql = "CREATE TABLE Productos (	iD INT AUTO_INCREMENT PRIMARY KEY,Nombre VARCHAR(255),Descripcion VARCHAR(255),cantidadDisponible INT(10),Peso DECIMAL(10,2),Caracteristica VARCHAR(255),Precio DECIMAL(10,2),Imagen VARCHAR(255),Tienda VARCHAR(255),Vendedor VARCHAR(255),Puntaje DECIMAL (10,2), condicionProducto VARCHAR(255),Ubicacion VARCHAR(255),Bodega VARCHAR(255), tiempoEntrega VARCHAR(255))";

		//var sql2 = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
		//var sql2 = 'INSERT INTO Productos (Nombre, Descripcion, cantidadDisponible, Peso, Caracteristica, Precio, Imagen, Tienda, Vendedor, Puntaje, condicionProducto, Ubicacion, Bodega, tiempoEntrega) VALUES ?';
    var sql2 = 'INSERT INTO Productos SET ?';
    var cambioGT = 7.33;
    var seguro = (parseInt(req.body.Precio) *0.07);
    var ValorProducto = parseInt(req.body.Precio) + seguro;

    var preciototal =(((3.55)*cambioGT)* parseInt(req.body.Peso))+ValorProducto;
    var impuesto = preciototal * 0.12;
    var TotalNeto = preciototal + impuesto;
    console.log("El total a pagar es de " + TotalNeto);
    var data = {

   	 Nombre:req.body.nombre,
  	 Descripcion:req.body.descripcion,
  	 cantidadDisponible:req.body.cantidadDisponible,
  	 Peso:req.body.Peso,
  	 Caracteristica:req.body.Caracteristica,
  	 Precio:TotalNeto,
  	Imagen:req.body.image,
  	 Tienda:req.body.Tienda,
  	 Vendedor:req.body.Vendedor,
  	 Puntaje:req.body.Puntaje,
  	 condicionProducto:req.body.condicionProducto,
  	 Ubicacion:req.body.Ubicacion,
  	 Bodega:req.body.Bodega,
  	 tiempoEntrega:req.body.tiempoEntrega
    };
    con.query(sql2, data , function (err, result) {
	    if (err) throw err;
	   //console.log("Table created");
			console.log("Datos Creados");
      console.log(result);

	  });
con.end();
	});
});



routes.get('/edit',function (req, res){
	res.render('Dashboard/index_dashboard',{
		title:'edit',
		layout:'layout/edit-post'
	});


});
routes.put('/edit/:id',function (req, res){
	Blogs.findByIdAndUpdate({'_id':req.params.id},{
			title 	:  req.body.title,
			date  	:  req.body.date,
			content	:  req.body.content,
			extract	:  req.body.extract,
			author	:  req.body.author,
			image	:  req.body.image,
			gallery	:  req.body.gallery,

	},function(err, obj){
		if(err) res.send(err);
		else    res.send('Actualizado');
	});

});
module.exports = routes;
