// var obj = {
//     firstName:"sachin",
//     lastNmae:"yadav",
//     // using function to create method of objects
//     fullName: function(){
//         return this.firstName+" "+this.lastNmae;
//     }
// };

// console.log(obj.fullName());

// var person1={
//     firstName:"sara",
//     lastNmae:"khan",
// };
// console.log(obj.fullName.call(person1));

 var person={
    fullName:function(city,country){
        return (this.firstName+" "+this.lastName+" "+city+" "+country)
    },
 };
 var person1 = {
    firstName:"sara",
    lastName:"khan"
 };
console.log(person.fullName.call(person1,"Munbai","india"));

//apply method to reuse a method available in other object

var person2={
    firstName:"mohit",
    lastName:"kumar",
};

console.log(person.fullName.apply(person2,["delhi","India"]));