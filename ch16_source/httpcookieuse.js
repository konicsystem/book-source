var http = require('http');

var server = http.createServer(function (request, response) {
  var cookies = request.headers.cookie;
  response.writeHead(200, {'Content-Type': 'text/html',
  'Set-Cookie:':['id=nodejs','passwd=1234']});
  response.write('<h1>'+cookies+'</h1>');
  response.end('WebServer Test\n');
}).listen(8888);

console.log('http cookie test');

