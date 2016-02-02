var connect = require('connect');
var fs = require('fs');
var ejs = require('ejs');

var app = connect()
.use(function(req,res){
	fs.readFile('ejspage.ejs', 'utf8', function (error, data) {
            // 응답합니다.
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ejs.render(data));
            });

})
 .listen(3000);
 console.log('ejs test server started');
