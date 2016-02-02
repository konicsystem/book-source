var connect = require('connect');
var app = connect()
.use(function(req,res){
	res.end('web server start with port number 3000');
})
 .listen(3000);
 console.log('web server started');