var url = require('url');
//var urlObj = url.parse("http://user:pass@localhost:8088/path/test?query=cat#hashString"); 
//var urlObj = url.parse("http://user:pass@localhost:8088/path/test?query=cat#hashString",true); 
var urlObj = url.parse("//path/test?query=cat#hashString ",true,true);
console.log("urlObj.href = " + urlObj.href);
console.log("urlObj.protocol = " + urlObj.protocol);
console.log("urlObj.host = " + urlObj.host);
console.log("urlObj.auth = " + urlObj.auth);
console.log("urlObj.port = " + urlObj.port);
console.log("urlObj.pathname = " + urlObj.pathname);
console.log("urlObj.search = " + urlObj.search);
console.log("urlObj.path = " + urlObj.path);
console.log("urlObj.query :");
console.dir(urlObj.query);
console.log("urlObj.hash = " + urlObj.hash);
