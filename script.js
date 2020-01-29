random = Math.floor(Math.random() * 8);
checking1 = false;
checking2 = false;
checking3 = false;

ran = Math.floor(Math.random() * 4);
console.log(ran);

document.querySelector("#machine").onmouseover = function(){
    document.querySelector("#hover").style.visibility = "visible";
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
document.querySelector("#first").onclick = function(){
    checking1 = true;
    if (random == 0)
        document.querySelector("#first").innerHTML = "Future"; 
    else if (random == 1)
        document.querySelector("#first").innerHTML = "Future"; 
    else if (random == 2)
        document.querySelector("#first").innerHTML = "Painted"; 
    else if (random == 3)
        document.querySelector("#first").innerHTML = "Ruffling"; 
    else if (random == 4)
        document.querySelector("#first").innerHTML = "Seasons";
    else if (random == 5)
        document.querySelector("#first").innerHTML = "Fresh"; 
    else if (random == 6)
        document.querySelector("#first").innerHTML = "Filmy";
    else if (random == 7)
        document.querySelector("#first").innerHTML = "Losing";  
    else if (random == 8)
        document.querySelector("#first").innerHTML = "Restored";  
}
document.querySelector("#second").onclick = function(){
    checking2 = true;
    if (random == 0)
        document.querySelector("#second").innerHTML = "Sharpen"; 
    else if (random == 1)
        document.querySelector("#second").innerHTML = "Scan"; 
    else if (random == 2)
        document.querySelector("#second").innerHTML = "Jaguar"; 
    else if (random == 3)
        document.querySelector("#second").innerHTML = "Turn"; 
    else if (random == 4)
        document.querySelector("#second").innerHTML = "Funnels";
    else if (random == 5)
        document.querySelector("#second").innerHTML = "Filling"; 
    else if (random == 6)
        document.querySelector("#second").innerHTML = "Regime";
    else if (random == 7)
        document.querySelector("#second").innerHTML = "Visions";  
    else if (random == 8) 
        document.querySelector("#second").innerHTML = "Project";

}
document.querySelector("#third").onclick = function(){
    checking3 = true;
    if (random == 0)
        document.querySelector("#third").innerHTML = "Awesome"; 
    else if (random == 1)
        document.querySelector("#third").innerHTML = "Bunch"; 
    else if (random == 2)
        document.querySelector("#third").innerHTML = "Human"; 
    else if (random == 3)
        document.querySelector("#third").innerHTML = "Foster"; 
    else if (random == 4)
        document.querySelector("#third").innerHTML = "Awesome";
    else if (random == 5)
        document.querySelector("#third").innerHTML = "Boat"; 
    else if (random == 6)
        document.querySelector("#third").innerHTML = "Reefs";
    else if (random == 7)
        document.querySelector("#third").innerHTML = "Ending";  
    else if (random == 8) 
        document.querySelector("#third").innerHTML = "Ending";
}
coins = document.querySelectorAll(".coin");
click = "0";
console.log(coins);

document.querySelector(".one").onclick = function(){
    click = "3";
    document.querySelector("#slide a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "1";
    document.querySelector(".two").style.opacity = "0.3";
    document.querySelector(".five").style.opacity = "0.3";
    document.querySelector(".ten").style.opacity = "0.3";
}

document.querySelector(".two").onclick = function(){
    click = "5";
    document.querySelector("#slide a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "0.3";
    document.querySelector(".two").style.opacity = "1";
    document.querySelector(".five").style.opacity = "0.3";
    document.querySelector(".ten").style.opacity = "0.3";
}
document.querySelector(".five").onclick = function(){
    click = "7";
    document.querySelector("#slide a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "0.3";
    document.querySelector(".two").style.opacity = "0.3";
    document.querySelector(".five").style.opacity = "1";
    document.querySelector(".ten").style.opacity = "0.3";
}
document.querySelector(".ten").onclick = function(){
    click = "10";
    console.log(click);
    document.querySelector("#slide a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "0.3";
    document.querySelector(".two").style.opacity = "0.3";
    document.querySelector(".five").style.opacity = "0.3";
    document.querySelector(".ten").style.opacity = "1";
}

$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $(".slot").css("display", "block");
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 400, 'linear');
        $("#slide").css("display", "none");
    });
  });

document.querySelector("#slot").onmouseover = function(){
    document.querySelector("#first").style.display = "block";
    document.querySelector("#second").style.display = "block";
    document.querySelector("#third").style.display = "block";
}

document.querySelector("#machine").onclick = function(){
    if (checking1 & checking2 & checking3){
    if (click == "7"){
        console.log("here!!!!!!!");
        console.log("7 is clcked");
        ran = Math.floor(Math.random() * 4);
        console.log(ran);
        link = "story7.html";
        console.log(ran);
        if (ran == 0){
            window.location.href = link;
        }
        else if (ran == 1){
            window.location.href = "story2.html";
        }
        else if (ran == 2){
            window.location.href = "story3.html";
        }
        else{
            window.location.href = "story12.html";
        }
    }
    else if (click == "5"){
        console.log("5 is clcked");
        ran = Math.floor(Math.random() * 4);
        console.log(ran);
        if (ran == 0){
            window.location.href = "story4.html";
        }
        else if (ran == 1){
            window.location.href = "story5.html";
        }
        else if (ran == 2){
            window.location.href = "story10.html"
        }        
        else if (ran == 3){
            window.location.href = "story1.html";
        }
    }
    else if (click == "10"){
        console.log("10 is clcked");
        ran = Math.floor(Math.random() * 2);
        console.log(ran);
        if (ran == 0){
            window.location.href = "story7.html";
        }
        else if (ran == 1){
            window.location.href = "story11.html";
        }
    }
    else if (click == "3"){
        console.log("3 is clcked");
        ran = Math.floor(Math.random() * 3);
        console.log(ran);
        console.log(ran);
        if (ran == 0){
            window.location.href = "story9.html";
        }
        else if (ran == 1){
            window.location.href = "story8.html";
        }
        else if (ran == 2){
            window.location.href = "story6.html";
        }
    }
    else{
        window.location.href = "story1.html";
    }
}
}