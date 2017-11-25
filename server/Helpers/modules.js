/* jshint node: true , esnext: true*/

/*
  Este "Helper" carga los archivos -NombreModulo.js- que se encuentren en el archivo
  Modules/loader.json
*/
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var fs = require('fs');

module.exports = function (app, config) {
  var Modules = (function () {
    function Modules() {
      _classCallCheck(this, Modules);

      // Classname
      this.name = 'Modules Loader';
      // installer json
      var i = config.SystemPath + '/Modules/loader.json';
      var installer = fs.readFileSync(i, 'utf-8', function (err, data) {
        if (err) throw err;
        return data;
      });
      installer = JSON.parse(installer);
      this.modules = installer.modules;
    }

    Modules.prototype.init = function init() {
      var installed = this.modules;
      for (var key in installed) {
        require(config.SystemPath + '/Modules/' + installed[key] + '/' + installed[key])(app);
      }
    };

    return Modules;
  })();

  var modules = new Modules();
  modules.init();
};
