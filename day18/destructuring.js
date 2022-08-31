//destructuring

var are=[1,2,3,4,5,6,7,8,9,10];
let x=a[0];
let y=a[1];
let z=a[9];

let [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);

let person = {
    name:"",
    age:40,
    mobile:"0054654679",
    email:"",
    city:"goa",
};
let {mobile,email,city}=person;
console.log(mobile);
console.log(email);
console.log(city);