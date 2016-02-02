process.on('uncaughtException', function (err) {
  console.log('에러 메시지: ' + err);
});

var i = 1;
setInterval(function () {
  if(i>=5) endFunction();
  console.log('아직 에러 없다.');
  i += 1;
}, 500);
