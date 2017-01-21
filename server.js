var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  console.log(app.get);
  res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.post( '/calc/sum', function( req, res ) {
  console.log(req.body);
 	//var num = Number( req.body.x ) + Number( req.body.y );
  var num = Number(req.body.x) + Number(req.body.y);
  console.log(num);
  res.send({num});
  //res.sendStatus(200);
});

app.post( '/calc/sub', function( req, res ) {
 	var num = Number(req.body.x) + Number(req.body.y);
 	console.log(num);
  res.send({num})
});

 app.post( '/calc/mul', function( req, res ) {
 	var num = Number(req.body.x) + Number(req.body.y);
  console.log(num);
  res.send({num});
});

app.post( '/calc/div', function( req, res ) {
 	var num = Number(req.body.x) + Number(req.body.y);
  console.log(num);
  res.send({num});
 });

app.listen(3000);
