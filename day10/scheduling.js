//setTimeout function
setTimeout(callback, 3000);

function callback(){
    console.log("hello friends")
}

setTimeout(()=>{
    console.log("hello")
},5000);

// setTimeInterval

var myInterval = setInterval(callback,2000);
clearInterval(myInterval);
