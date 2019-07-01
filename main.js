var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    port     :  3306,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mytrash'
  });

  connection.connect(function(err) {

    if (err) throw err
    console.log('You are now connected...')
    
   
  })

  app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var server = app.listen(8081,  "127.0.0.1", function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("Example app listening at http://%s:%s", host, port)
  
  });
  //resultados de puntos de reciclaje
app.get('/employees/', function (req, res) {
  
    connection.query('select * from punto_reciclaje', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
       console.log(results);
     });
 });