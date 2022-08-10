//javascript objects: of referanve datatype

//way-1 to create object

var person={ 
    name:"krishna",
    age: 30,
    city:{
        cityName:"agra",pincode:282009},
        sector:[1,2,3,4,5,6],
        details :function(){
            return this.name +" "+ this.cityName;
        },
    };
    console.log(person);
    console.log(person.name);
    console.log(person.city.cityName);
    console.log(person.sector[1]);
    console.log(person.details);
