var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('WebServer Test\n');
}).listen(8888);

//최대 리스너 개 수 지정하기 
server.setMaxListeners(12);

for(i = 1;i < 12;i++){
server.on('connection',function connect(){
		console.log(i + '번 째 접속');	
	});
}

console.dir(server.listeners('connection'));
