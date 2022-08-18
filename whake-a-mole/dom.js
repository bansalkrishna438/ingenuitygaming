
var h1=document.querySelector('h1');
var startemole=document.querySelector('#mole');
var startedirt=document.querySelector('#mud');
var startebtn=document.querySelector('#start');
var points=document.querySelector('.points');
var dirt=document.querySelectorAll(".dirt");
var mole=document.querySelectorAll(".mole");
var p=0;


function start(){
    h1.style.visibility="hidden";
    startemole.style.visibility="hidden";
    startedirt.style.visibility="hidden";
    startebtn.style.visibility="hidden";
    points.style.visibility="visible";
    dirt[0].style.visibility="visible";
    for(var i=0;i<6;i++){
        dirt[i].style.visibility="visible"
    }
    setInterval(visi,1000);

    function visi()
    {
        var random=Math.floor(Math.random()*6);;
        mole[random].style.visibility="visible";

        setTimeout(hidi,800);
        function hidi(){
            mole[random].style.visibility="hidden";
        }

    }
    
    
}
function point()
    {
        p=p+1;
         console.log(p)
        document.getElementById('score').innerHTML=p;
    }