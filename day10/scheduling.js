// //setTimeout function
// setTimeout(callback, 3000);

// function callback(){
//     console.log("hello friends")
// }

// setTimeout(()=>{
//     console.log("hello")
// },5000);

// // setTimeInterval

// var myInterval = setInterval(callback,2000);
// clearInterval(myInterval);

var intervalID = setInterval(alert, 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.

setTimeout(alert, 1000); // Will alert once, after a second.
setInterval(function(){ 
	console.log("Oooo Yeaaa!");
}, 2000);
