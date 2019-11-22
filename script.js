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
    click = "3";
    document.querySelector(".alert").style.visibility = "visible";
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
    document.querySelector(".slot").style.display = "block";
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
// document.querySelector("a").onclick = function(event){
//     event.preventDefault();
//     console.log("hah");
// }
$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $(".slot").css("display", "block");
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 400, 'linear');
    });
  });


$(function() {
    $("#pack").on('click', function(e) {
        e.preventDefault();
        $("#story").css("display", "block");
        $('html, body').animate({scrollLeft:'+=1500'},300);
    });
  });

document.querySelector("#pack").onclick = function(){
    console.log("here");
    show = "#story1";
    if (click == "7"){
        document.querySelector("#story").style.display = "block";
        console.log("here!!!!!!!");
        ran = Math.floor(Math.random() * 3);
        console.log(ran);
        if (ran == 0){
            document.querySelector("#story1").style.display = "block";
        }
        else if (ran == 1){
            document.querySelector("#story2").style.display = "block";
        }
        else if (ran == 2){
            document.querySelector("#story3").style.display = "block";
        }
        else{
            document.querySelector("#story1").style.display = "block";
        }
    }
    if (click == "5"){
        document.querySelector("#story2").style.display = "block";
    }
    if (click == "10"){
        document.querySelector("#story3").style.display = "block";
    }
    else{
        document.querySelector("#story1").style.display = "block";
    }
}

