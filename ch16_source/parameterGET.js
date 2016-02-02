var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var method = request.method;
    if(method=='GET'){
    	query = url.parse(request.url,true).query;
  		response.write('<h1>id='+query.id + ' passwd=' + query.passwd);
  		response.end();
    }
}).listen(8888);

console.log('get parameter test');

