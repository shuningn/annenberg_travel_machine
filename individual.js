
document.querySelector('.description').onclick = function(){
        document.querySelector("#story1p").style.display = "none";
        document.querySelector("#storyd1").style.display = "block";
}

document.querySelector("#sidebar").onmouseover = function(){
    document.querySelector("h3").innerHTML = "Created By Ray Jin, JiaCheng Li, Blair Niu, XiongSen Xia";
    document.querySelector("h3").style.letterSpacing = "3px";
    document.querySelector("h3").style.fontSize = "14px";
}
document.querySelector("#sidebar").onmouseout = function(){
    document.querySelector("h3").innerHTML = "TRAVEL MACHINE";
    document.querySelector("h3").style.letterSpacing = "7px";
    document.querySelector("h3").style.fontSize = "23px";
}
document.querySelector("#footer").style.display = "none";