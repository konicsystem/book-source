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
  console.log('car into list : ');
  console.log('번호\t모델명\t가격\t제조회사\t연식');
  for(var i in rows){
  	console.log(rows[i].car_no + '\t' + rows[i].car_name + '\t' + rows[i].car_price + '\t' + rows[i].car_company + '\t' + rows[i].car_year);
  }
});

connection.end();