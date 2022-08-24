// Callback;
var students=[
    {name:"jay",subject:"java"},
    {name:"jay",subject:"java"},
    {name:"jay",subject:"java"},
];
function admitStudent(student){
    setTimeout(() => {
        students.push(student);
    }, 3000);
}

function displayStudent(student){
    setTimeout(() => {
        var str="";
        students.forEach((student)=>{
            str += student.name+" ";
        });
        console.log(str);
        console.log("stuent have been fetched")
    }, 1000);
}

var newStudent={name:"rahul", subject:"react"};
admitStudent(newStudent);
displayStudent();
