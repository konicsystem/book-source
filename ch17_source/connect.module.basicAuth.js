var connect = require('connect');
connect()
  .use(connect.basicAuth('java', 'java'))
  .use(function(req, res){
    res.end('user = ' + req.user + '<br>');
  })
  .listen(3000);
 console.log('basicAuth middleware test');
