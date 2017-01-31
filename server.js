var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public')); // allows every file in public to be available to others
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

// // four different POST requests to handle each type of operation
app.post( '/add', function( req, res ) {
  var num = Number(req.body.numX) + Number(req.body.numY);
  res.send({num});
});

app.post( '/sub', function( req, res ) {
 	var num = Number(req.body.numX) - Number(req.body.numY);
  res.send({num})
});

 app.post( '/mul', function( req, res ) {
 	var num = Number(req.body.numX) * Number(req.body.numY);
  res.send({num});
});

app.post( '/div', function( req, res ) {
 	var num = Number(req.body.numX) / Number(req.body.numY);
  res.send({num});
 });

 var port = process.env.PORT || 5555;
 var server = app.listen(port, function () {
   console.log('Listening on port ', server.address().port);
 });

 // // this is the code used for the base assignment
 // // doing the math in one post request with a switch statment based on the math operator
 // app.post( '/calc', function( req, res ) {
 //   console.log(req.body);
 //   switch (req.body.operator) {
 //     case 'add':
 //       var num = Number(req.body.x) + Number(req.body.y);
 //       res.send({num});
 //       break;
 //     case 'sub':
 //       var num = Number(req.body.x) - Number(req.body.y);
 //       res.send({num});
 //       break;
 //     case 'mul':
 //       var num = Number(req.body.x) * Number(req.body.y);
 //       res.send({num});
 //       break;
 //     case 'div':
 //       var num = Number(req.body.x) / Number(req.body.y);
 //       res.send({num});
 //       break;
 //     default:
 //       console.log('You broke it!');
 //       res.sendStatus(400);
 //   }
 // });
