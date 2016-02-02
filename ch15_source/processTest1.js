process.stdout.write('stdout 테스트' + '\n');
process.stderr.write('stderr 테스트' + '\n');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data',function(data){
	process.stdout.write('data: ' + data);
});

process.stdin.on('end',function(){
	process.stdout.write('테스트 끝');
});
