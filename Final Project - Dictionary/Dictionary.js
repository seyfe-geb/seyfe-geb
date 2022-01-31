var express = require('express');

var app = express();
var port = 2021

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
})

app.listen(port, () => console.log("Server start on port: " + port))

app.get('/', (req, res) => {

  var word= req.query.word;
  // fetch the data and put it to res to send it back to client requesting it
  var query= require('./word');
  query.queryWord(word, res);
  
})

app.get('/Dictionary', function(req, res){
    var path = require('path');
      res.sendFile(path.join(__dirname, '/dict.html'));
})