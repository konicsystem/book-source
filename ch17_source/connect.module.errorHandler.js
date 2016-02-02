var connect = require('connect');
connect()
.use(function(req, res){
    throw new Error('Error Defined');
    
  })
  .use(connect.errorHandler())
  .listen(3000);
 console.log('errorHandler middleware test');
