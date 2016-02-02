var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var method = request.method;
    if(method=='GET'){
    	fs.readFile('login.html',function (err,data){
  		response.writeHead(200, {'Content-Type': 'text/html'});
  		response.write(data);
  		response.end();
  		});
    }
    else if(method=='POST'){
        request.on('data',function(data){
        param = data.toString();
        params = param.split('&');
        
        response.writeHead(200, {'Content-Type': 'text/html'});
        for(var i=0;i<params.length;i++){
        	response.write('<h1> key = ' + (params[i].split('='))[0]);
        	response.write(' value = ' + (params[i].split('='))[1] + '</h1>');
        }       
  		response.end();
        });
    }
}).listen(8888);

console.log('http.method test');

















