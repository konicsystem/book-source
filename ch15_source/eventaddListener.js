/*process.addListener('exit', function(){
	console.log('addListener exit');
});
*/

process.on('exit',function(err){
	console.log('on exit');	
});

console.log('event test');
