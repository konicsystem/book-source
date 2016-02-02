var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
});

connection.connect();
connection.query('use vehicle');
connection.query('SELECT * FROM car', function(err, rows, fields) {
  if (err) throw err;
  console.log('dat of car table is: ', rows);
});

connection.end();