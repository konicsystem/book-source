var connect = require('connect');
var fs = require('fs');
var ejs = require('ejs');
var url = require('url');
var mysql = require('mysql');

var app = connect()
.use(connect.query())
.use(connect.bodyParser())
.use(function(req,res){
	var connection = mysql.createConnection({
 	 host     : 'localhost',
 	 user     : 'root',
  	 password : '1234',
  	 database : 'vehicle'
	});
	connection.connect();
	
	var pathname = url.parse(req.url).pathname;
	
	console.log(pathname);
	if(pathname == '/carList'){
		fs.readFile('carList.html', 'utf8', function (error, data) {
		connection.query('SELECT * FROM car', function(err, rows, fields) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ejs.render(data,{data:rows}));
            });
        connection.end();
		});
	}
	
	else if(pathname == '/carRegistForm'){
		fs.readFile('carRegistForm.html', 'utf8', function (error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ejs.render(data));
		});
	}
	
	else if(pathname == '/carRegist'){
	    var car_name = req.body.car_name;
	    var car_price = req.body.car_price;
	    var car_company = req.body.car_company;
	    var car_year = req.body.car_year;
		connection.query('INSERT INTO car(car_name,car_price,car_company,car_year) VALUES(?,?,?,?) ',[car_name,car_price,car_company,car_year]
		, function(err, rows, fields) {
            res.writeHead(302, { 'Location': '/carList' });
        	res.end();
        	connection.end();
        });
	}
	
	else if(pathname == '/carDelete'){
	    var car_no = req.query.car_no;
	    console.log(car_no);
		connection.query('DELETE FROM car WHERE car_no = ?',[car_no]
		, function(err, rows, fields) {
            res.writeHead(302, { 'Location': '/carList' });
        	res.end();
        	connection.end();
        });
	}
	
	else if(pathname == '/carUpdateForm'){
	    var car_no = req.query.car_no;
	    fs.readFile('carUpdateForm.html', 'utf8', function (error, data) {
		connection.query('SELECT * FROM car WHERE car_no = ?',[car_no], function(err, rows, fields) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ejs.render(data,{data:rows}));
            });
            connection.end();
		});
	}
	
	else if(pathname == '/carUpdate'){
	    var car_no = req.body.car_no;
	    var car_name = req.body.car_name;
	    var car_price = req.body.car_price;
	    var car_company = req.body.car_company;
	    var car_year = req.body.car_year;
		connection.query('UPDATE car SET car_name = ?,car_price = ?,car_company = ?, car_year = ? WHERE car_no = ?',
		[car_name,car_price,car_company,car_year,car_no]
		, function(err, rows, fields) {
            res.writeHead(302, { 'Location': '/carList' });
        	res.end();
        	connection.end();
        });
	}
})
 .listen(3000);
 console.log('mysql server started');