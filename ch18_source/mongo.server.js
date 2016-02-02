var connect = require('connect');
var fs = require('fs');
var ejs = require('ejs');
var url = require('url');
var mongo = require('mongojs');

var app = connect()
.use(connect.query())
.use(connect.bodyParser())
.use(function(req,res){
	var mongodb = mongo.connect('vehicle',['car']);
	var pathname = url.parse(req.url).pathname;

	if(pathname == '/carList'){
		fs.readFile('carList_mongo.html', 'utf8', function (error, data) {
		mongodb.car.find(function(err, rows) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ejs.render(data,{data:rows}));
            });
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
		mongodb.car.save({car_name:car_name,car_price:car_price,car_company:car_company,car_year:car_year}
		, function(err, rows) {
            res.writeHead(302, { 'Location': '/carList' });
        	res.end();
        });
	}
	
	else if(pathname == '/carDelete'){
	    var car_name = req.query.car_name;
		mongodb.car.remove({car_name:car_name}
		, function(err) {
            res.writeHead(302, { 'Location': '/carList' });
        	res.end();
        });
	}
	
	else if(pathname == '/carUpdateForm'){
	    var car_name = req.query.car_name;
	    fs.readFile('carUpdateForm_mongo.html', 'utf8', function (error, data) {
		mongodb.car.find({car_name:car_name}, function(err, rows) {
		    console.log(rows);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ejs.render(data,{data:rows}));
            });
		});
	}
	
	else if(pathname == '/carUpdate'){
	    var car_name = req.body.car_name;
	    var car_price = req.body.car_price;
	    var car_company = req.body.car_company;
	    var car_year = req.body.car_year;
		mongodb.car.update({car_name:car_name},{$set:{car_price:car_price,car_company:car_company,car_year:car_year}},{multi:true}
		, function(err) {
            res.writeHead(302, { 'Location': '/carList' });
        	res.end();
        });
	}
})
 .listen(3000);
 console.log('server started');