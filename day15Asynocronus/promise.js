function sayHi(){
    // return new Promise(function(resolve, reject){});
    return new Promise((resolve, reject)=>{
        const err=false;
        if(!err){
            resolve("done");
        }
        else{
            reject("sorry");
        }
    });
}

// console.log(sayHi());
sayHi().then((val)=>console.log(val))
.catch((err)=> console.log(err));