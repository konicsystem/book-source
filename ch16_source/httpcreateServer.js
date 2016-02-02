var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('WebServer Test\n');
}).listen(8888);

console.log('http.createServer test');
