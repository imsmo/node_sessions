// Require packages/ modules
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const router = express.Router();

// Create HTTPServer
const server = http.createServer(app);

// Set View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);

// Set Routes
app.get('/',function(req,res){
	res.render("index.html",{
		'name':'<b>sanjay</b>'
	});
	// res.send("Hello World");
});

// Start Server
server.listen(3000, function () {
	console.log("Server listening at PORT:" + "3000");
});

// module.exports = server;
