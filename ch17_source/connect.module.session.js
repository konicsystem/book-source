var connect = require('connect');
var fs = require('fs');
var url = require('url');

var app = connect()
.use(connect.bodyParser())
.use(connect.cookieParser())
.use(connect.session({secret:'test'}))
.use(function(req,res){
	var urlObj = url.parse(req.url,true);
    var pathname =urlObj.pathname;
	if(pathname == "/loginForm"){	
	 if(req.session.loginId == undefined || req.session.loginId == ''){
		fs.readFile('login.html', function (err, data) {
                // 응답합니다.
                res.writeHead(200, { 'Content-Type': 'text/html' ,'Content-Encoding': 'utf8'});
                res.end(data);
            }
        );
     }
     else if(req.session.loginId == 'admin'){
     	fs.readFile('admin.html', function (err, data) {
                // 응답합니다.
                res.writeHead(200, { 'Content-Type': 'text/html' ,'Content-Encoding': 'utf8'});
                res.end(data);
            }
        );
     }
     
     else if(req.session.loginId == 'member'){
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
			req.session.loginId=id;
        
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
		 req.session.loginId='';
        res.end('<a href="/loginForm">Login Page</a>');		
	}
})   
.listen(3000);
 console.log('web server started');
