
exports.queryWord= function(word, res){
  const mysql = require('mysql');
  
  var con = mysql.createConnection({
    host: "127.0.0.1",  // or localhost
    database: "entries",
    port: 3306,
    user: "root",
    password: "password",
  
  });
  
  con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
  });
  
    //var word= req.query.word;
    // fetch the data
    var sql = `SELECT wordtype, definition FROM entries where word= '${word}'`;
    //This is async function, a big problem,
    con.query(sql, function (err, data) {
      if (err) throw err;
      res.json(data);
       //con.end(() => console.log("DB Disconnected!"));
  
    });
}










