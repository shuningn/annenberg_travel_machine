/*
       document : travel-machine.js
     created on : late 2019 probably??
         author : blair niu and audrey bongalon, from usc annenberg interactives team
    description : js for travel machine
*/

let lengthOfTrip = 0;  // TODO - move to main function

$(document).ready(() => {
    let chips = $(".coin");

    // when a chip is clicked, store the value and lower the opacity of the rest
    chips.click(function() {
        lengthOfTrip = parseInt($(this).attr("data-travel-days"));  // get value from html attribute
        chips.css("opacity", "0.3");                                // set all chips to 30% opacity
        $(this).css("opacity", "1");                                // set the chip that was clicked to 100% opacity
    });
});

let random = Math.floor(Math.random() * 8);
let checking1 = false;
let checking2 = false;
let checking3 = false;

let ran = Math.floor(Math.random() * 4);
console.log("ran", ran);

document.querySelector("#machine").onmouseover = function () {
    document.querySelector("#hover").style.visibility = "visible";
}




document.querySelector("#sidebar").onmouseover = function () {
    document.querySelector("h3").innerHTML = "Created By: Ray Jin, JiaCheng Li, Blair Niu,<br>XiongSen Xia, Audrey Bongalon";
    document.querySelector("h3").style.letterSpacing = "3px";
    document.querySelector("h3").style.fontSize = "12px";
}

document.querySelector("#sidebar").onmouseout = function () {
    document.querySelector("h3").innerHTML = "TRAVEL MACHINE";
    document.querySelector("h3").style.letterSpacing = "7px";
    document.querySelector("h3").style.fontSize = "23px";
}




document.querySelector("#first").onclick = function () {
    checking1 = true;

    let random = Math.floor(Math.random() * 8);

    if (random === 0)
        document.querySelector("#first").innerHTML = "Future";
    else if (random === 1)
        document.querySelector("#first").innerHTML = "Future";
    else if (random === 2)
        document.querySelector("#first").innerHTML = "Painted";
    else if (random === 3)
        document.querySelector("#first").innerHTML = "Ruffling";
    else if (random === 4)
        document.querySelector("#first").innerHTML = "Seasons";
    else if (random === 5)
        document.querySelector("#first").innerHTML = "Fresh";
    else if (random === 6)
        document.querySelector("#first").innerHTML = "Filmy";
    else if (random === 7)
        document.querySelector("#first").innerHTML = "Losing";
    else if (random === 8)
        document.querySelector("#first").innerHTML = "Restored";
}
document.querySelector("#second").onclick = function () {
    checking2 = true;
    if (random === 0)
        document.querySelector("#second").innerHTML = "Sharpen";
    else if (random === 1)
        document.querySelector("#second").innerHTML = "Scan";
    else if (random === 2)
        document.querySelector("#second").innerHTML = "Jaguar";
    else if (random === 3)
        document.querySelector("#second").innerHTML = "Turn";
    else if (random === 4)
        document.querySelector("#second").innerHTML = "Funnels";
    else if (random === 5)
        document.querySelector("#second").innerHTML = "Filling";
    else if (random === 6)
        document.querySelector("#second").innerHTML = "Regime";
    else if (random === 7)
        document.querySelector("#second").innerHTML = "Visions";
    else if (random === 8)
        document.querySelector("#second").innerHTML = "Project";
}



document.querySelector("#third").onclick = function () {
    checking3 = true;
    if (random === 0)
        document.querySelector("#third").innerHTML = "Awesome";
    else if (random === 1)
        document.querySelector("#third").innerHTML = "Bunch";
    else if (random === 2)
        document.querySelector("#third").innerHTML = "Human";
    else if (random === 3)
        document.querySelector("#third").innerHTML = "Foster";
    else if (random === 4)
        document.querySelector("#third").innerHTML = "Awesome";
    else if (random === 5)
        document.querySelector("#third").innerHTML = "Boat";
    else if (random === 6)
        document.querySelector("#third").innerHTML = "Reefs";
    else if (random === 7)
        document.querySelector("#third").innerHTML = "Ending";
    else if (random === 8)
        document.querySelector("#third").innerHTML = "Ending";
}




coins = document.querySelectorAll(".coin");
console.log(coins);




$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $(".slot").css("display", "block");
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 400, 'linear');
        $("#slide").css("display", "none");
    });
});




document.querySelector("#slot").onmouseover = function () {
    document.querySelector("#first").style.display = "block";
    document.querySelector("#second").style.display = "block";
    document.querySelector("#third").style.display = "block";
}




$("#machine").click(() => {
    if (checking1 && checking2 && checking3) {
        if (lengthOfTrip === 3) {
            console.log("3 is clcked");
            ran = Math.floor(Math.random() * 3);
            console.log(ran);
            console.log(ran);
            if (ran === 0) {
                window.location.href = "story9.html";
            }
            else if (ran === 1) {
                window.location.href = "story8.html";
            }
            else if (ran === 2) {
                window.location.href = "story6.html";
            }
        }
        else if (lengthOfTrip === 7) {
            console.log("here!!!!!!!");
            console.log("7 is clcked");
            ran = Math.floor(Math.random() * 4);
            console.log(ran);
            link = "story7.html";
            console.log(ran);
            if (ran === 0) {
                window.location.href = link;
            }
            else if (ran === 1) {
                window.location.href = "story2.html";
            }
            else if (ran === 2) {
                window.location.href = "story3.html";
            }
            else {
                window.location.href = "story12.html";
            }
        }
        else if (lengthOfTrip === 5) {
            console.log("5 is clcked");
            ran = Math.floor(Math.random() * 4);
            console.log(ran);
            if (ran === 0) {
                window.location.href = "story4.html";
            }
            else if (ran === 1) {
                window.location.href = "story5.html";
            }
            else if (ran === 2) {
                window.location.href = "story10.html"
            }
            else if (ran === 3) {
                window.location.href = "story1.html";
            }
        }
        else if (lengthOfTrip === 10) {
            console.log("10 is clcked");
            ran = Math.floor(Math.random() * 2);
            console.log(ran);
            if (ran === 0) {
                window.location.href = "story7.html";
            }
            else if (ran === 1) {
                window.location.href = "story11.html";
            }
        }
        else {
            window.location.href = "story1.html";
        }
    }
});

