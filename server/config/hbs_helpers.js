 "use strict";
 var paginate = require('handlebars-paginate');
 module.exports = function(hbs){
 	hbs.registerHelper('paginate', paginate);
 };
