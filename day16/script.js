// selector
var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
ctx.fillStyle="red";
ctx.fillRect(50, 50, 150, 120);

ctx.linewidth =5;
ctx.strokeStyle="blue";
ctx.strokeRect(250,50,150,100);

ctx.fillStyle="orange";
ctx.roundRect(450,50,100,100,[30]);
ctx.fill();

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.font ="30px Arial";
ctx.fillStyle="green";
ctx.fillText("hello world",200,200);

ctx.linewidth=1;
ctx.strokeStyle="purple";
ctx.strokeText("heleo wolos",200,300);

ctx.clearRect(0,0,canvas.width,canvas.height);

//draw triangle
//path
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(100,200)
ctx.lineTo(50,50);
// ctx.closePath()
ctx.fillStyle="coral";
// ctx.stroke();
ctx.fill();
ctx.moveTo(200,50);
ctx.lineTo(150,200);
ctx.lineTo(250,200);
ctx.closePath();
ctx.stroke();

// filled reactangle
ctx.beginPath();
ctx.rect(300,50,150,100);
ctx.fillStyle="blue"
ctx.stroke();


//draw Arc
ctx.beginPath();
ctx.arc(300,300,100,0,Math.PI*2);
ctx.stroke();
// radian=(Math.PI)*2
//filled circle
