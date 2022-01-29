const express = require('express');
const url = require('url');
const app = express();
const PORT = 3000;
var fs = require('fs');
const path = require('path');

app.listen(PORT, (err)=>{
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


app.get('/simplecalculator', function(req, res) {
    res.sendFile(path.join(__dirname, '/simplecalculator.html'));
  });

app.use('/calculator', (req, res, next) => {
    var q= req.query;
    var fn= parseInt(q.firstNum);
    var sn= parseInt(q.secondNum);
    var op = parseInt(q.operation);
    var output;
    switch(op){
        case 0: output = fn + sn;
            break;
        case 1: output = fn - sn;
            break;
        case 2: output = fn * sn;
            break;
        case 3: output = fn / sn;
            break;
    }
    res.send("The Answer is: "+ output 
            +"<br><br> <a href= 'http://localhost:3000/calculator'>Another calculation</a>");
});