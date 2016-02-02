var fs = require('fs');

var asyncMessage = "asyncMessage";
var syncMessage = "syncMessage";

fs.writeFileSync("syncMessage.txt",syncMessage , "utf8");
fs.writeFile("asyncMessage.txt", asyncMessage, "utf8",function(err){

});

fs.readFile('asyncMessage.txt','utf8',function(err,data){
	console.log(data);
});

var syncReadMessage = fs.readFileSync("syncMessage.txt", "utf-8");
console.log(syncReadMessage);
