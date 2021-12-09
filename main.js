var hsuma = 0;
const dotsStyler = function () {
    if (hsuma === -100) {
        console.log(2);
        document.getElementById("dot1").classList.remove("dot-active");
        document.getElementById("dot2").classList.add("dot-active");
        document.getElementById("dot3").classList.remove("dot-active");
    }
    if (hsuma === -200) {
        console.log(3);
        document.getElementById("dot1").classList.remove("dot-active");
        document.getElementById("dot2").classList.remove("dot-active");
        document.getElementById("dot3").classList.add("dot-active");
    }
    if (hsuma === -300 || hsuma === 0) {
        console.log(1);
        document.getElementById("dot1").classList.add("dot-active");
        document.getElementById("dot2").classList.remove("dot-active");
        document.getElementById("dot3").classList.remove("dot-active");
    }
}

$(document).ready(function(){
    $(".next").click(function(){
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
