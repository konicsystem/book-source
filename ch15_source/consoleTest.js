console.log('name : %s','oh jeong weon');
console.log('%d * %d = %d',10,10.1,10*21);
console.log('Person %j',{name:'nate',age:9});
console.log('%d%',100);

console.dir({name:'nate',age:9});

console.time('timeA');
var sum = 0;
for(i=1;i<1000000;i++)
{
sum += i;
}
console.log("sum=" + sum);
console.timeEnd('timeA');

console.time('timeB');
sum = 0;
for(i=1;i<100000;i++)
{
sum += i;
}
console.log("sum=" + sum);
console.timeEnd('timeB');