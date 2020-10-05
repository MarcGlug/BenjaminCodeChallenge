window.onload = function(){

document.onmousemove = mousePosition;
backCircle = document.getElementById("backCircle");
frontCircle = document.getElementById("frontCircle");
imgBenj = document.getElementById("imgBenj");

function mousePosition(e){
    const w = window.innerWidth;
    let currentX = e.pageX;
    let xPer = currentX / w;

    backCircle.style.transform = "translate("+ xPer * 10 + "%)";
    frontCircle.style.transform = "translate("+ xPer * -250 + "%)";
    imgBenj.style.transform = "translate("+ xPer * (-5) + "%)";
}
}