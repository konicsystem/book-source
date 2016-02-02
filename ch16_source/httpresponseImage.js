var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  fs.readFile('bada.jpg',function (err,data){
  	response.writeHead(200, {'Content-Type': 'image/jpeg'});
  	response.write(data);
  	response.end();
  });
  
}).listen(8888);

console.log('response image test');
