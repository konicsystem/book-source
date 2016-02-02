var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  response.writeHead(302, {'Location': 'http://jpub.tistory.com/'});
  response.end();
}).listen(8888);

console.log('response redirect test');
