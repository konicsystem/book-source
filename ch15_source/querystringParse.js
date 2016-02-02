var querystring = require('querystring');

var obj = querystring.parse('name=aaa&hobby=socker&hobby=baseball&passwd=1234')

console.log("obj = " + JSON.stringify(obj));
