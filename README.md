# MarketPlace



MarketPlace es un sitio web  construido para  poder vender y publicitar productos en nuestras plataformas dandole al usuario una agradable experiencia en su uso  de la plataforma podremos  hacer lo siguiente con los productos que deseamos

  - Visualizacion de Imagenes
  - Ingresar
  - Eliminar
  - Actualizar
  - Consultar



### Tecnologia


MarketPlace usa un numero de  proyectos open source como por ejemplo:

* [AngularJS] - HTML  para  web apps!
* [Twitter Bootstrap] - mejoramiento de UI para  web apps modernas
* [node.js] - evented I/O para  el BackEnd
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - Para el sistema de copilacion
* [jQuery] -  para  manejo de datos
* [JavaScript] - para  el backEnd
* [Pm2] -  Production process manager for Node.js



### Instalacion

MarketPlace requiere de  [Node.js](https://nodejs.org/) v4+  para poder ser desplegado.


Instale las dependecies y las devDependecies y ahora ejecute el servidor

```sh
$ cd MarketPlace-test
$ npm install -d
$ npm install pm2 -g
$ npm install --global gulp-cli
$ pm2 start process.json
$ gulp
```
en el navegor web ingresamos a
http://localhost:8310/
y estamos listo para el uso de la aplicacion

### Configuracion Mysql
En el routes.js de Dashboard encontrara la seccion para configurar la base de datos
```
var con = mysql.createConnection({
  host: "localhost",
  user: "Miusuario",
  password: "Mipassword",
  database: "MiBasedeDatos"
});
```

### Plugins

MarketPlace requiere de los siguiente extenciones para poder trabajar correctamente. Instrucciones de uso de cada uno estan diponibles

| Plugin | README |
| ------ | ------ |
| Github | [plugins/github/README.md] [PlGh] |
| Google Drive | [plugins/googledrive/README.md] [PlGd] |
| Google Analytics | [plugins/googleanalytics/README.md] [PlGa] |




### Por Hacer


 -Creacion de version para mobiles

Creditos
----
-Edgar Patzan
web developer
para pidelorapido.com


License
----

MIT





[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)








   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [JavaScript]:<https://www.javascript.com/>
   [Pm2]:<http://pm2.keymetrics.io/>


   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
