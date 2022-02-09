
$(document).ready(function () {
    $("img").click(function(){
        $(this).siblings("h3").show();
    })

    $("img").dblclick(function(){
        $(this).siblings("h3").hide();
    })
})

/*
$(document).ready(function () {
    $("img").click(function(){
        $(this).siblings("h3").css("display", "block");
    })

    $("img").dblclick(function(){
        $(this).siblings("h3").css("display", "none");
    })
}) */