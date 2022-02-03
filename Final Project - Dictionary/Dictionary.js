var express = require('express');

var app = express();
var PORT = 7070

app.use(express.static("./"));

app.listen(PORT, () => console.log("Server start on port: " + PORT))

app.get('/', (req, res) => {
  var word= req.query.word;
  var query= require('./scripts/word');
  query.queryWord(word, res);
})

app.get('/OnlineDictionary', function(req, res){
    var path = require('path');
      res.sendFile(path.join(__dirname, '/dict.html'));
})