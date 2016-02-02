var fs = require('fs');

var files = fs.readdirSync('C:\\');
for(var item in files){
		console.log(files[item]);
}

console.log("--------------------------------------");

fs.readdir('C:\\', function(err,files){
	for(var item in files){
		console.log(files[item]);
	}
});