var path = require('path');
var fs = require('fs');

module.exports = {
	publicDir: path.join(__dirname + '/public' ),	
	port: process.env.NODE_PORT,
	SystemPath:path.join(__dirname + "/server")


};
