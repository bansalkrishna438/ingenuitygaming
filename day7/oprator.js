//javascript operators
// airthmetic opertators
// +,0,*,/,%,--,++

var a = 20 ,b=20;
var c= a+b;
var d= a-b;
var e= a*b;
var f= a/b;
var g= a%b;
console.log("Result="+c);
console.log("Result="+d);
console.log("Result="+e);
console.log("Result="+f);
console.log("Result="+ ++g);
console.log("Result="+ g++);
console.log("Result="+ g--);
console.log("Result="+ --g);

// realtional opretators
// <,>,<=,>=,==,===,!=,!==
// result is true false

(a=10),(b=20),(c=30);

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a!=b);
console.log(a!==b);

a="20";
// comaprison operators: it comapres the value
console.log(a == b);
// strict comaprison operators: it comapres the value as well as datatype
console.log(a === b);
console.log(a !== b);
// logical operator
var result = (a<b) && (a != b);
var result1 = "Hello"  ||(a != b);
var result1 = "Hello"  || (a != b);
console.log("logical OR:" +result);
console.log("logical and:" +result1);
console.log("logical NOT:" +!result);
// assignment operartor
//=,+=,-=,/+,*=,%=
b=55;
console.log((a = b));
console.log((a += b));
//ternary operator
result=a!=b


// console.log((a === b));