// window.onload=function(){ 
//     setInterval(() => {
//         stoploader();
// }, 3000);
// };
// function stoploader(){
//     document.querySelector('.container').style.display="none";
//     document.querySelector('.container1').style.display="block";
// }

window.onload=function(){
    setInterval(() => {
        stoploading();
    }, 1000);
};
function stoploading(){
    document.querySelector('container2').style.display="none";
    document.querySelector('container1').style.display="block";
}
