var querystring = require('querystring');

var querystring1 = 
querystring.stringify({ name: 'aaa', hobby: ['socker', 'baseball'], passwd: '1234' });

console.log("querystring1 = " + querystring1);

var querystring2 = 
querystring.stringify({ name: 'aaa', hobby: ['socker', 'baseball'], passwd: '1234' }, ';', ':');

console.log("querystring2 = " + querystring2);

