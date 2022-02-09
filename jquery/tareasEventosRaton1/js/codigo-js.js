
$(document).ready(function () {
    $("img").hover(function () {
        $(this).siblings("h3").toggle();
    })
})
/*
$(document).ready(function () {
    $("img").mouseover(function () {
        $(this).siblings("h3").toggle();
    }).mouseleave(function () {
        $(this).siblings("h3").toggle();
    })
})

$(document).ready(function () {
    $("img").on("mouseenter",function () {
        $(this).siblings("h3").toggle();
        
    })
    $("img").off("mouseleave",function () {
        $(this).siblings("h3").toggle();
    })
})

*/