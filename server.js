// Require packages/ modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
const router = express.Router();
const _ = require('lodash');

// Create HTTPServer
const server = http.createServer(app);

// Set View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);

// BodyParser Middleware for all routes
app.use(bodyParser.urlencoded({
	extended: true,
	limit: '50mb',
	type: 'application/x-www-form-urlencoded'
}));

// Set Routes
app.get('/',function(req,res){
	res.render("index.html",{
		'name':'<b>sanjay</b>'
	});
	// res.send("Hello World");
});

app.post('/add_note',(req,res)=>{

	console.log("BODY",req.body);
	var params = _.pick(req.body,['name','description']);
	console.log("PARAMS",params);

	if(_.isEmpty(params.name)){
		return res.send({'status':0,'message':'Name parameter missing','data':null})
	}
	// notes.push()

	var notes = [{'name':'test','description':'This is sample note'}];
	notes.push(params);
	res.send({'status':1,'message':'Note added successfully','data':notes})
});

// Start Server
server.listen(3000, function () {
	console.log("Server listening at PORT:" + "3000");
});

// module.exports = server;
