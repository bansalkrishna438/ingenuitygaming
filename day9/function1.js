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


// javascript scope
// there are 3 types of scope
// 1. block scope
// function scope1(){
//     {
//         var a=10;
//         console.log("Inside scope1");
//             console.log(a);
//         function scope2(){
//             console.log("Inside scope2");
//             console.log(a);
//         }
//         scope2();
//     }
//     scope1();
//     console.log(a);
// }


// function checkVar(){

//     let data = 20;
//     console.log(data);
// }
// checkVar();
// console.log(data);


// function add(a,b){
//     return a+b;
// }
// var sum= add;
// console.log(sum(5,10));
// console.log(add(5,10));

// function avg(a,b,sum){
//     return sum(a,b,)/2;
// }
// function add(a,b){
//     return a+b;
// }
// var sum =add;
// var result = avg(6,90,add);
// console.log("final result = "+result);

function Person(){
    //properties

    this.name = "Krishna";
    this.age=21;

    //methode
    this.details = function(){
        return "Name = " +this.name + "Age:"+this.age;
    };
}
var obj1=new Person();
console.log(obj1.name);
obj1.name="sachine";
console.log(obj1.details());