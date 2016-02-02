var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , car = require('./routes/car')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

/*
app.get('/carList',car.carList);
app.get('/carUpdateForm',car.carUpdateForm);
app.get('/carInfo',car.carInfo);
app.get('/carRegistForm',car.carRegistForm);
*/

app.get('/carList',function(request,response){
	response.render('index',{title:'CarList'});
});

app.get('/carUpdateForm',function(request,response){
	response.render('index',{title:'CarUpdateForm'});
});

app.get('/carInfo',function(request,response){
	response.render('index',{title:'CarInfo'});
});

app.get('/carRegistForm',function(request,response){
	response.render('index',{title:'CarRegistForm'});
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
