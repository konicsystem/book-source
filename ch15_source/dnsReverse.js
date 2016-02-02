var dns = require('dns');

dns.reverse('168.126.63.1',function(err,domains){
	console.log("address : " + JSON.stringify(domains));
});