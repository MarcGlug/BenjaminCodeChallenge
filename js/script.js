window.onload = function(){

backCircle = document.getElementById("backCircle");
frontCircle = document.getElementById("frontCircle");
imgBenj = document.getElementById("imgBenj");
imgPart = document.getElementsByClassName("imgPart");
    
//On lance une fois le circle resize pour que les cercles aient tout de suite
// la bonne taille
circleResize();

//EVENTS
document.onmousemove = mousePosition;
window.onresize = circleResize;


function mousePosition(e){
    const w = window.innerWidth;
    let currentX = e.pageX;
    let xPer = currentX / w;

    backCircle.style.transform = "translate("+ xPer * 10 + "%)";
    frontCircle.style.transform = "translate("+ xPer * -250 + "%)";
    imgBenj.style.transform = "translate("+ xPer * (-5) + "%)";
}

function circleResize(){
    w = imgPart[0].offsetWidth;
    h = imgPart[0].offsetHeight;
    backCircle.style.width = w*0.8 + "px";
    backCircle.style.height = w *0.8 + "px";
    frontCircle.style.width = w*0.1 + "px";
    frontCircle.style.height = w *0.1 + "px";
    
}
}
