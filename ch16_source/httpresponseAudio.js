var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  fs.readFile('1.mp3',function (err,data){
  	response.writeHead(200, {'Content-Type': 'audio/mp3'});
  	response.write(data);
  	response.end();
  });
  
}).listen(8888);

console.log('response audio test');

