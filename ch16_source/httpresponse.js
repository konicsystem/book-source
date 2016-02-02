var http = require('http');

var responseData ='<h1>Response Test</h1>';
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html',
   'Content-Length': responseData.length,
   'Trailer': 'doubleLine' });
  response.write(responseData);
  response.addTrailers({'doubleLine': "=========================="});
  response.end();
}).listen(8888);

console.log('response test');


