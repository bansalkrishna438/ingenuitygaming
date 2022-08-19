var h1=document.querySelector('h1');
var startemole=document.querySelector('#mole');
var startedirt=document.querySelector('#mud');
var startebtn=document.querySelector('#start');
var points=document.querySelector('.points');
var dirt=document.querySelectorAll(".dirt");
var mole=document.querySelectorAll(".mole");
var points3=document.querySelector('.points2');
var p=0;


function start(){
    var pp=6000;

    h1.style.visibility="hidden";
    startemole.style.visibility="hidden";
    startedirt.style.visibility="hidden";
    startebtn.style.visibility="hidden";
    points.style.visibility="visible";
    points3.style.visibility="visible";
    dirt[0].style.visibility="visible";
    for(var i=0;i<6;i++){
        dirt[i].style.visibility="visible"
    }

    startti();

    setInterval(visi, 1000);

    function visi(){
        var random=Math.floor(Math.random()*6);;
        mole[random].style.visibility="visible";

        setTimeout(hidi,800);

        function hidi(){
            mole[random].style.visibility="hidden";
        }
    }
    setTimeout(result,pp);
    function result(){
        if(pp == 6000){
            console.log("result");
            console.log(p);
            localStorage.setItem("points",p);
            window.location.href-"second.html"
        }
    }
    
    
}
function point()
    {
        p=p+1;
        document.getElementById('score').innerHTML=p;
    }
    function play() {
        var audio = new Audio('Powerful-Trap-.mp3');
        audio.play();
      }
    
var timer;
var timeleft=10;
function gameOver(){
    cancelInterval(timer);
}

function updateTimer(){
    timeleft=timeleft-1;
    if(timeleft>=0)
        document.getElementById('score2').innerHTML=timeleft;
    else{
        gameOver();
    }
}
function startti(){
    timer = setInterval(updateTimer,1000);
    updateTimer();
}