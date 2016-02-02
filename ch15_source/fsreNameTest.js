var fs = require('fs');

fs.rename('asyncFile.txt', 'asyncFileRename.txt',function(err){
	if(err){
	 	console.log(err);
	}
	else{
	 	console.log("rename success");
	}	
});

console.log('-------------------------------------------');

try{
 	fs.renameSync('syncFile.txt','syncFileRename.txt');
}
catch(err)
{
	console.log(err);
}