var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  fs.readFile('hog.mp4',function (err,data){
  	response.writeHead(200, {'Content-Type': 'video/mp4',
  	'Content-Disposition':'attachment;filename=hog.mp4'});
  	response.write(data);
  	response.end();
  });
  
}).listen(8888);

console.log('response download test');

