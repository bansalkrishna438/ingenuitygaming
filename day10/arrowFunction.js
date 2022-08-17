var add =function(){
    return a+b;
}
console.log(add(5,10));

//ES6 Fat Arrow Function
var add = (a, b) => a+b;
console.log(add(5, 15));

//variation 1
var sayHello=()=>console.log("this is arrow function");
var sayHello=()=>{
    console.log("fvfvfd");
    console.log("jnjklji");

};

sayHello();

// variation 2
var sqr=(a)=>console.log("result: "+a*a);
sqr(5);




var myArr=[1,3,5,7];
myArr.forEach((a)=>console.log(10*a));