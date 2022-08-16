// //function without arguments and without return
// function myfun(){
//     // function defination
//     console.log("This is Function");
//     console.log("it will perform some task");
// }
// myfun();


// //function with arguments and without return

// function myfun2(a,b){
//     console.log("function with argument");
//     console.log("result is :" +(a+b));
// }
// myfun2(5,10);


// // function with argument and with return

// function myfun3(a,b){
//     return a+b;
// }   
// var result = myfun3(10,20);
// console.log("result = "+result);
// console.log("data reseved = "+myfun3(10,30));


// function myfun4(message){
//     if(message) return message;
//     else return "no data found";
// }
// console.log(myfun4("hello"));
// console.log(myfun4());


// function expression: storing function defination inside a variable is called function expression. it is also known as anonymous function.
var a=function(){
    console.log("this is function expression");
    return "hello friends"
};
console.log(a());

// self invoking function

(function(){
    console.log("this is an anonymous function and its gets called itself");
})();

// function hosting

// sayHello(5,10);

// function sayHello(a, b){
//     console.log("result="+ (a + b));
// }