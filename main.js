var hsuma = 0;
let process = false;

const getStepByHsuma = function (hsuma) {
    if (hsuma === -100)
        return 2;
    else if (hsuma === -200)
        return 3;
    else
        return 1;
}

const dotsStyler = function (before) {
    console.log("BEFORE", before);
    const step = getStepByHsuma(hsuma);
    console.log(step);
    if (step === 2) {
        document.getElementById("dot1").classList.remove("dot-active");
        document.getElementById("dot2").classList.add("dot-active");
        document.getElementById("dot3").classList.remove("dot-active");

        if (before === 3) {
            $("#logo2").fadeIn(300);
            setTimeout(() => {
                $("#logo3").fadeOut(300);
            }, 200);
        } else {
            $("#logo1").fadeOut(300);
            $("#logo2").fadeIn(300);
        }

    }
    if (step === 3) {
        document.getElementById("dot1").classList.remove("dot-active");
        document.getElementById("dot2").classList.remove("dot-active");
        document.getElementById("dot3").classList.add("dot-active");

        if (before === 2) {
            // document.getElementById("logo_black").classList.add("z-index-2");
            // document.getElementById("logo_black").classList.remove("z-index-1");
            document.getElementById("logo").classList.add("z-index-1");
            document.getElementById("logo").classList.remove("z-index-2");
            $("#logo3").fadeIn(300);
            setTimeout(() => {
                $("#logo2").fadeOut(300);
            }, 200)
        }
        else {
            $("#logo1").fadeOut(0);
            $("#logo3").fadeIn(300);
        }
    }
    if (step === 1) {
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
        const before = getStepByHsuma(hsuma);
        hsuma += -100;
        dotsStyler(before);
        if(hsuma>=-200)
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        else{
            hsuma = 0;
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        }
    });


    $(".prev").click(function(){
        if(hsuma==0){
            const before = getStepByHsuma(hsuma);
            hsuma = -200;
            dotsStyler(before)
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        }
        else{
            const before = getStepByHsuma(hsuma);
            hsuma += 100;
            dotsStyler(before);
            $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
        }
    });
});
