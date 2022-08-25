//selector

var canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

//animation
var circle={
    x:200,
    y:200,
    size:30,
    dx:5,
    dy:5,
};

// draw circle 
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle="purple";
    ctx.fill();
}
//drawCircle();

function update(){
    ctx.clearRect(0,0,canvas.Width,canvas.height);
    drawCircle();
    circle.x += circle.dx;
    // circle.y += circle.dy;
    requestAnimationFrame(update);

    if(circle.x + circle.size>canvas.Width || circle.x -circle.size<0) circle.dx *= -1;
    console.log(123);
}
update();
