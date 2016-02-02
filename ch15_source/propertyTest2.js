process.argv.forEach(function (arg, index) {
  	console.log(index + ': ' + arg);
}); 

console.log('실행된 프로그램의 절대 경로 : ' + process.execPath);
console.log('node 의 버전 : ' + process.version);
console.log('node 와 의존하고 있는 프로그램들의 버전 : \n');
console.dir(process.versions);