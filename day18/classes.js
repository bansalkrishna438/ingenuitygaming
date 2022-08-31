//ES6
//class | blueprint
class Training{
    //constructor
    constructor(trainingName, trainingDuration,traingStatus="online"){
        this.trainingName=trainingName;
        this.trainingDuration=trainingDuration;
        this.traingStatus=traingStatus;
    }

    // menber function
    displayDetails(){
        return `Training Name: ${this.trainingName}\nTraining Duration: ${
            this.trainingDuration}\nTraining Status: ${this.traingStatus}`;
    }
}

//object creation
let IngenityGaming = new Training("Development Basics",120,"offices");
let Dell =new Training("ReactJS",40);

//method calling
console.log(IngenityGaming.displayDetails());
console.log(Dell.displayDetails());
