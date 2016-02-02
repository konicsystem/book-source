var connect = require('connect');
connect(  
  connect.static(__dirname + '/Public'),
    function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<!DOCTYPE html>');
        response.end('<audio id="audioTest" src="/Kalimba.mp3" controls autoplay ></audio>');
    }
  )
  .listen(3000);
  console.log('static middleware test');
