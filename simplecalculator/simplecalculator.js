const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, (err)=>{
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

app.get('/calculator', (req, res, next) => {
    res.send(`<!DOCTYPE html>
                <html>
                    <head>
                        <meta charset=\"utf-8\"/>
                        <title>Simple Calculator</title>
                        <style>
                            fieldset{
                                margin:50px 500px;
                                padding-left:100px;
                            }
                        </style>
                    </head>
                    <body>
                        <fieldset>
                            <legend>Simple Calculator</legend>
                            <form action="/calculate">
                                <div>
                                    <h2>Enter two numbers: </h2>
                                    <input type="text" name="firstNum" placeholder="Enter first number"/><br /><br />
                                    <input type="text" name="secondNum" placeholder="Enter second number"/><br /><br />
                                    <label>Select operation: </label> 
                                    <select name="operation" id="operation">
                                        <option value="0">Add</option>
                                        <option value="1">Subtract</option>
                                        <option value="2">Multiply</option>
                                        <option value="3">Divide</option>
                                    </select>
                                    <br><br>
                                    <input type="submit" value="Calculate" />
                                </div>
                            </form>
                        </fieldset>
                    </body>
                </html>`);
});

app.use('/calculate', (req, res, next) => {
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