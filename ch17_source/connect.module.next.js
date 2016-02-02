var connect = require('connect');
var search='';
var num = 0;
connect(connect.query(),function(req, res ,next){
    search = req.query.search;
    next();
  },
  function(req, res ,next){
    num = req.query.num;
    next();
  },
  function(req, res,next){
    res.writeHead(200, { 'Content-Type': 'text/html' ,'Content-Encoding': 'utf8'});
    res.write('search = ' + search + '<br>');  
    res.end('num = ' + num + '<br>');  
  })
  .listen(3000);
  console.log('query and next middleware test');
