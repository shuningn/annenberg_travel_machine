coins = document.querySelectorAll(".coin");
click = 0;
console.log(coins);
for (i = 0; i < 4; i++){
    console.log("coinaaaa s");
    coins[i].onmouseover = function(){
        document.querySelector(".alert").style.visibility = "visible";
    }
    if (click == 0){
        coins[i].onmouseout = function(){
        document.querySelector(".alert").style.visibility = "hidden";
        }
    }
}
document.querySelector(".one").onclick = function(){
    click = 1;
    document.querySelector(".alert").style.visibility = "visible";
    document.querySelector("#section07 a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "1";
    document.querySelector(".two").style.opacity = "0.3";
    document.querySelector(".five").style.opacity = "0.3";
    document.querySelector(".ten").style.opacity = "0.3";
}
document.querySelector(".two").onclick = function(){
    click = 1;
    document.querySelector("#section07 a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "0.3";
    document.querySelector(".two").style.opacity = "1";
    document.querySelector(".five").style.opacity = "0.3";
    document.querySelector(".ten").style.opacity = "0.3";
}
document.querySelector(".five").onclick = function(){
    click = 1;
    document.querySelector("#section07 a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "0.3";
    document.querySelector(".two").style.opacity = "0.3";
    document.querySelector(".five").style.opacity = "1";
    document.querySelector(".ten").style.opacity = "0.3";
    document.querySelector(".slot").style.display = "block";
}
document.querySelector(".ten").onclick = function(){
    click = 1;
    document.querySelector("#section07 a").style.visibility = "visible";
    document.querySelector(".one").style.opacity = "0.3";
    document.querySelector(".two").style.opacity = "0.3";
    document.querySelector(".five").style.opacity = "0.3";
    document.querySelector(".ten").style.opacity = "1";
}
// document.querySelector("a").onclick = function(event){
//     event.preventDefault();
//     console.log("hah");
// }
$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $(".slot").css("display", "block");
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

