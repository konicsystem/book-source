var connect = require('connect');
connect()
  .use(connect.query())
  .use(function(req, res){
    res.write(JSON.stringify(req.query) + '<br>');
    res.write('search = ' + req.query.search + '<br>');
    res.end('num = ' + req.query.num + '<br>');
    
  })
  .listen(3000);
  console.log('query middleware test');

