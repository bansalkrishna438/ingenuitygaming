export default function (){
    console.log("this is an Important Information");
}

let message ="this is module concepts";

let accountNo=123;

let display=(name)=>{
    return `${name},welcome to ingenuity gaming`;
};

export class Employee{
    constructor(name,id,designation){
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    dispDetails(){
        console.log(`Employee Name: ${this.name}\nEmployee Id:${this.id}\nEmployee designation:${this.designation}`
        );

    }
}

export{message,display,Employee};