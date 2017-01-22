var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  // console.log(app.get);
  res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.post( '/calc', function( req, res ) {
  if (req.body.operator == 'add'){
    var num = Number(req.body.x) + Number(req.body.y);
    res.send({num});
  } else if (req.body.operator == 'sub') {
    var num = Number(req.body.x) - Number(req.body.y);
    res.send({num});
  } else if (req.body.operator == 'mul') {
    var num = Number(req.body.x) * Number(req.body.y);
    res.send({num});
  } else if (req.body.operator == 'div') {
    var num = Number(req.body.x) / Number(req.body.y);
    res.send({num});
  } else {
    res.send(400);
  }

  console.log(num);

});


//// four different POST requests to handle each type of operation
// app.post( '/sum', function( req, res ) {
//   console.log(req.body);
//   var num = Number(req.body.x) + Number(req.body.y);
//   console.log(num);
//   res.send({num});
// });
//
// app.post( '/sub', function( req, res ) {
//  	var num = Number(req.body.x) - Number(req.body.y);
//  // 	console.log(num);
//   res.send({num})
// });
//
//  app.post( '/mul', function( req, res ) {
//  	var num = Number(req.body.x) * Number(req.body.y);
//   // console.log(num);
//   res.send({num});
// });
//
// app.post( '/div', function( req, res ) {
//  	var num = Number(req.body.x) / Number(req.body.y);
//   // console.log(num);
//   res.send({num});
//  });

app.listen(3000);
