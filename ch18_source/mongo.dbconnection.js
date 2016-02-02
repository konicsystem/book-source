var mongodb = require('mongojs').connect('vehicle',['car']);
mongodb.car.find(function(err,data){
	console.log(data);
});
