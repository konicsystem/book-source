var dns = require('dns');

dns.resolve('developer.android.com', 'A', function(err,addresses){
	console.log("address for android : " + JSON.stringify(addresses));
});
