var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('WebServer Test\n');
}).listen(8888);

server.once('connection',connect1);

function connect1(){
	console.log('Server running at http://127.0.0.1:8888/'); 
}

console.log('once test');
