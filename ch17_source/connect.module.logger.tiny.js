var connect = require('connect');
var app = connect(connect.logger('tiny'))
.use(function(req,res){
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('web server start with port number 3000');
})
 .listen(3000);
 console.log('web server started');