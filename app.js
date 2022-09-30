const button = document.getElementById("button");
const body= document.getElementById("canvas");

function randomColor(){

    let hex= "0123456789ABCDEF";
    let num="#";
    for (let index = 0; index < 6; index++) { 
       num = num +  hex[Math.floor(Math.random()*16)];
    }
    return num;
    
}

button.style.cursor="pointer";

button.addEventListener("click",()=>{
    body.style.backgroundColor= randomColor();
    body.style.border= "3px solid black"
});