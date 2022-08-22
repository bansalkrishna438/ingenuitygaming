//Selector 

var toInput=document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList=document.querySelector(".todo-list");


btn.onclick = function createToDo(e){
    e.preventDefault();

    var newDiv=document.createElement("div");
    newDiv.classList.add('todo');

    var newLi=document.createElement("li");
    newLi.classList.add("todo_item");
    newLi.innerHTML=toInput.value;
    newDiv.appendChild(newLi);


    var cmpltbtn=document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML='<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);


    var deltbtn=document.createElement("button");
    deltbtn.classList.add("deltbtn");
    deltbtn.innerHTML='<i class="fa fa-trash"></i>';
    newDiv.appendChild(deltbtn);


    todoList.appendChild(newDiv);

    toInput.value="";

};

    todoList.onclick=function checkbtn(e){
        var check = e.target;     //e.target btata hai kis cheez ko target kiya hua hai 
        // console.log(check);

        if(check.classList[0] == "deltbtn"){
            // console.log("Delete button pressed");
            var parentNode=check.parentElement;
            // console.log(parentNode);
            parentNode.remove();
        }
        else if(check.classList[0] == "cmpltbtn"){
            // console.log("Complete button pressed");
            var parentNode=check.parentElement;
            parentNode.classList.add("check")
        }
    };


clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}