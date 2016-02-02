var connect = require('connect');
var fs = require('fs');
var ejs = require('ejs');

var app = connect()
.use(connect.query())
.use(function(req,res){
	fs.readFile('print.ejs', 'utf8', function (error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ejs.render(data,{data:{id:req.query.id,passwd:req.query.passwd}}));
            });

})
 .listen(3000);
 console.log('ejs test server started');
