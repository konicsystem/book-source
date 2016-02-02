var path = require('path');
relativePath1 = path.relative('C:/aaa/test1/bbb', 'C:/aaa/tmp/ccc');
relativePath2 = path.relative('/aaa/test1/bbb', '/aaa/tmp/ccc');

console.log("path.relative('C:/aaa/test1/bbb', 'C:/aaa/tmp/ccc') = " + relativePath1);
console.log("path.relative('/aaa/test1/bbb', '/aaa/tmp/ccc') = " + relativePath2);

dirPath = path.dirname('C:/aaa/test1/bbb');

console.log("path.dirname('C:/aaa/test1/bbb') = " + dirPath);

basePath1 = path.basename('C:/aaa/test1/bbb/1.jpg');
basePath2 = path.basename('C:/aaa/test1/bbb/1.jpg', '.jpg');

console.log("path.basename('C:/aaa/test1/bbb/1.jpg') = " + basePath1);
console.log("path.basename('C:/aaa/test1/bbb/1.jpg', '.jpg') = " + basePath2);

extPath1 = path.extname('C:/aaa/test1/bbb/1.jpg');
extPath2 = path.extname('C:/aaa/test1/bbb/1.');
extPath3 = path.extname('C:/aaa/test1/bbb/1');

console.log("path.extname('C:/aaa/test1/bbb/1.jpg') = " + extPath1);
console.log("path.extname('C:/aaa/test1/bbb/1.') = " + extPath2);
console.log("path.extname('C:/aaa/test1/bbb/1') = " + extPath3);
sepStrArr = '\\aaa\\bbb\\ccc'.split(path.sep);
console.log("'\\aaa\\bbb\\ccc'.split(path.sep) = " + sepStrArr);
