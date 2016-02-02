var http = require('http');
var fs = require('fs');

var responseData = fs.readFileSync('login.html', 'utf8');

var server = http.createServer(function (request, response) {
  response.writeHead(404, {'Content-Type': 'text/html',
   'Trailer': 'doubleLine' });
  response.write(responseData);
  response.addTrailers({'doubleLine': "=========================="});
  response.end();
}).listen(8888);

console.log('response not found test');
