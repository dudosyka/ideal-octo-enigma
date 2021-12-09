var hsuma = 0;
let process = false;
const dotsStyler = function () {
    if (hsuma === -100) {
        console.log(2);
        document.getElementById("dot1").classList.remove("dot-active");
        document.getElementById("dot2").classList.add("dot-active");
        document.getElementById("dot3").classList.remove("dot-active");

        $("#logo1").fadeOut(300);
        $("#logo3").fadeOut(300);
        $("#logo2").fadeIn(300);
    }
    if (hsuma === -200) {
        console.log(3);
        document.getElementById("dot1").classList.remove("dot-active");
        document.getElementById("dot2").classList.remove("dot-active");
        document.getElementById("dot3").classList.add("dot-active");

        $("#logo1").fadeOut(300);
        $("#logo2").fadeOut(300);
        $("#logo3").fadeIn(300);
    }
    if (hsuma === -300 || hsuma === 0) {
        console.log(1);
        document.getElementById("dot1").classList.add("dot-active");
        document.getElementById("dot2").classList.remove("dot-active");
        document.getElementById("dot3").classList.remove("dot-active");

        $("#logo2").fadeOut(300);
        $("#logo3").fadeOut(300);
        $("#logo1").fadeIn(300);
    }
}

$(document).ready(function(){
    $("#logo2").fadeOut(0);
    $("#logo3").fadeOut(0);
    $(".next").click(function(){
        process = true;
        hsuma += -100;
        dotsStyler();
        if(hsuma>=-200)
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        else{
            hsuma = 0;
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        }
    });


    $(".prev").click(function(){
        if(hsuma==0){
            hsuma = -200;
            dotsStyler()
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        }
        else{
            hsuma += 100;
            dotsStyler();
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        }
    });
});
