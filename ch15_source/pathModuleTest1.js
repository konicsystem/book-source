var path = require('path');
filePath1 = path.normalize('/aaa/bbb//ccc/ddd/fff/..');
filePath2 = path.normalize('/aaa/bbb//ccc/ddd/fff/.');
filePath3 = path.normalize('/aaa/bbb//ccc/ddd/fff/');

console.log("path.normalize('/aaa/bbb//ccc/ddd/fff/..') = " + filePath1);
console.log("path.normalize('/aaa/bbb//ccc/ddd/fff/.') = " + filePath2);
console.log("path.normalize('/aaa/bbb//ccc/ddd/fff/') = " +  filePath3);

joinPath1 = path.join('/aaa', 'bbb', 'ccc/ddd', 'fff', '..');
joinPath2 = path.join('aaa', {}, 'bbb');

console.log("path.join('/aaa', 'bbb', 'ccc/ddd', 'fff', '..') = " + joinPath1);
console.log("path.join('aaa', {}, 'bbb') = " + joinPath2);

resolvePath1 = path.resolve('C:/aaa/bbb', '/test/file/', '..', 'ccc/../imageFile');
resolvePath2 = path.resolve('/aaa/bbb', './ccc');
resolvePath3 = path.resolve('/aaa/bbb', '/ccc/ddd/');
resolvePath4 = path.resolve('test','../image/1.png');

console.log("path.resolve('C:/aaa/bbb', '/test/file/', '..', 'ccc/../imageFile') = " + resolvePath1);
console.log("path.resolve('/aaa/bbb', './ccc') = " + resolvePath2);
console.log("path.resolve('/aaa/bbb', '/ccc/ddd/') = " + resolvePath3);
console.log("path.resolve('test','../image/1.png') = " + resolvePath4);