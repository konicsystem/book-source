var connect = require('connect');
var fs = require('fs');
var url = require('url');

var app = connect()
.use(connect.bodyParser())
.use(connect.cookieParser())
.use(function(req,res){
	var urlObj = url.parse(req.url,true);
    var pathname =urlObj.pathname;
	if(pathname == "/loginForm"){	
	    console.log(req.cookies.id);
	 if(req.cookies.id == undefined || req.cookies.id == ''){
		fs.readFile('login.html', function (err, data) {
                // 응답합니다.
                res.writeHead(200, { 'Content-Type': 'text/html' ,'Content-Encoding': 'utf8'});
                res.end(data);
            }
        );
        }
        
     else if(req.cookies.id == 'admin'){
     	fs.readFile('admin.html', function (err, data) {
                // 응답합니다.
                res.writeHead(200, { 'Content-Type': 'text/html' ,'Content-Encoding': 'utf8'});
                res.end(data);
            }
        );
     }
     
     else if(req.cookies.id == 'member'){
     	fs.readFile('member.html', function (err, data) {
                // 응답합니다.
                res.writeHead(200, { 'Content-Type': 'text/html' ,'Content-Encoding': 'utf8'});
                res.end(data);
            }
        );
     }     	
	}
	
	else if(pathname == "/login"){
		var id = req.body.id;
		var passwd = req.body.passwd;
		
		if(id == passwd){
			 res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['id='+id]
        });
        res.end('<a href="/loginForm">LoginCheck</a>');		
		}
		else{
		fs.readFile('loginFail.html', function (err, data) {
                // 응답합니다.
                res.writeHead(200, { 'Content-Type': 'text/html' ,'Content-Encoding': 'utf8'});
                res.end(data);
            }
        );
		}
	}
	
	else if(pathname == "/logout"){
		 res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['id=']
        });
        res.end('<a href="/loginForm">Login Page</a>');		
	}
})
.listen(3000);
 console.log('web server started');
