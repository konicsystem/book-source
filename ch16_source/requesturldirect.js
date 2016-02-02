var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var url = request.url;
    if(url=='/'){
    	fs.readFile('index.html',function (err,data){
  		response.writeHead(200, {'Content-Type': 'text/html'});
  		response.write(data);
  		response.end();
  		});
    }
    else if(url=='/memRegist'){
        fs.readFile('memRegist.html',function (err,data){
  		response.writeHead(200, {'Content-Type': 'text/html'});
  		response.write(data);
  		response.end();
        });
    }
    else if(url=='/boardWrite'){
        fs.readFile('boardWrite.html',function (err,data){
  		response.writeHead(200, {'Content-Type': 'text/html'});
  		response.write(data);
  		response.end();
        });
    }
}).listen(8888);

console.log('http url redirect test');




















