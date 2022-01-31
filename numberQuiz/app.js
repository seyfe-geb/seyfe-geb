const express= require('express');
const app= express();
var url = require('url');
const port= 8080;
let score=0;
let index=0;
const questions= [
                '3, 1, 4, 1, 5',
                '1, 1, 2, 3, 5',
                '1, 4, 9, 16, 25', 
                '2, 3, 5, 7, 11',
                '1, 2, 4, 8, 16',
                '1, 2, 3, 4, 5',
              ];
const answers= [9, 8, 36, 13, 32, 6];


// middleware: parse incoming request, without this request.body is undefined
app.use(express.json());
app.use(express.urlencoded());

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
  index=0;
  score=0;
  res.render('index', {score: score, sequence: questions[index]});
});


app.use('/submit', function(req, res){
  var q = req.query;
  var score = q.score;
  var input= q.answer;
  if(input== answers[index]){
    score++;
  }
  index++;
  if(index==questions.length){
    res.render('result', {score: score, max: questions.length});
    index=0;
    score=0;
    return;
  }
  res.render('index', {score: score, sequence:questions[index] });

  
});



app.listen(port, ()=> console.log("Server start on port "+ port))


