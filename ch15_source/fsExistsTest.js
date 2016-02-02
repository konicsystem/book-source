var fs = require('fs');

fs.exists('/tmp/test', function (isExists) {
  console.log(isExists ? "/temp/test 디렉토리 존재함. " : "/temp/test 디렉토리 존재 않함. ");
});

fs.exists('/node', function (isExists) {
  console.log(isExists ? "/node 디렉토리 존재함. " : "/node 디렉토리 존재 않함. ");
});
