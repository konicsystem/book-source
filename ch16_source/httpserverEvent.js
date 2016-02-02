var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('WebServer Test\n');
}).listen(8888);

server.on('connection',function(socket){
		console.log('connection');		
	}
);

var requestNum = 0;
server.on('request',function(request,response){
        if(requestNum == 3) {
        	server.close()
        }
        else{
            console.log(request.url);
			console.log('requestNum = ' + ++requestNum);	
		}
	}
);

server.on('close',function(){
		console.log('close');	
	}
);

console.log('http.createServer event test');



