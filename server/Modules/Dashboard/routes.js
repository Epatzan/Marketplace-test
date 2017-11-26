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
/** Coneccion con mysql user y password**/
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

//routh de Index

routes.get('/',function (req, res){
	res.render('Dashboard/index_dashboard',{
		title:'Dashboard',
		 layout: 'layout/dashboard'
	});

});
//routh de Consulta
routes.get('/Consulta',function (req , res){


  con.connect(function(err) {
  if (err) throw err;
 con.query("SELECT Nombre , cantidadDisponible , Precio , Caracteristica FROM Productos", function (err, rows, fields) {
    if (err) throw err;
   console.log(rows);
 var string  = JSON.stringify(rows);
 var json = JSON.parse(string);
 console.log(json);
   //
   res.render('Dashboard/dashboard-consulta',{
     title:'Consulta de Productos',
     layout:'layout/dashboard',
     data: json
   });
   //
    });
  });

});
routes.post('/Consulta',function (req , res){
  con.connect(function(err) {
  if (err) throw err;
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
//routh de Eliminar
routes.get('/Eliminar',function (req, res){
		res.render('Dashboard/dashboard-media',{
		title:'Seccion de media',
		layout:'layout/dashboard'
	});
  con.connect(function(err) {
  if (err) throw err;

 con.query("DELETE  FROM Productos ", function (err, result, fields) {
    if (err) throw err;
   console.log(result);
    });
  });
});

//routhes de Creacion de producto
routes.get('/create',function (req, res){
  res.render('Dashboard/create-post',{
   title: 'create',
   layout: 'layout/dashboard',

   });
});
routes.post('/create',function (req, res){
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
		con.query("CREATE DATABASE Catalogo", function (err, result) {
    if (err) console.log(err);
   console.log("Database created");
  });
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
			console.log("Datos Creados");
      console.log(result);
      res.render('Dashboard/create-post',{
       title: 'create',
       layout: 'layout/dashboard',

       });

	  });
con.end();
	});
});


//routhes de  edicion
routes.get('/edit',function (req, res){
	res.render('Dashboard/index_dashboard',{
		title:'edit',
		layout:'layout/edit-post'
	});


});
routes.put('/edit/:id',function (req, res){
});
module.exports = routes;
