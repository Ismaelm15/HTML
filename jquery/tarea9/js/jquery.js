$(document).ready(function () {

    $("#button").on({//varias funciones para el mismo input
        click:function(){
        $("header>#menu-principal>#menu").animate({"background-color":"red"}).toggle();
    },mouseenter:function(){
        $(this).animate({"color": "red",
                        "font-size":"1.2rem"});
    },mouseleave:function(){
        $(this).animate({"color": "black",
        "font-size":"3rem"});
    }})
})