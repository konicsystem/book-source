var dns = require('dns');

dns.lookup('www.google.com',6, function(err,address,family){
   console.log("address : " + address);
   console.log("family : " + family);
})