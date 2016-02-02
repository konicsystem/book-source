var money=5000;
var t;
function withDraw(){
   t = setTimeout(withDraw,10);
   if(money == 0) clearTimeout(t);
    console.log('money = ' + money);
	money -= 1000;
}

withDraw();

var num=0;
function showTime(){
    num += 1;
    if(num == 5) clearInterval(it);
	today = new Date();
	timeMsg = today.getHours() + "시 " + today.getMinutes() + "분 " +
	 today.getSeconds() + "초";
	console.log(timeMsg);
}

var it = setInterval(showTime,1000);

