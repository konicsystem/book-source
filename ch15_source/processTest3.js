console.log('사용중인 플랫폼 : ' + process.platform);
console.log('현재 실행중인 프로그램의 프로세스 아이디 : ' + process.pid);

console.log('시스템 환경 정보 : ');
console.dir(process.env);
console.log('node 의 환경졍보 : ');
console.dir(process.config);
