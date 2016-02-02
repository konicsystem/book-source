var dns = require('dns');

dns.resolve6('www.google.com',function(err,address){
	console.log("address : " + JSON.stringify(address));
});
