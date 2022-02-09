$(document).ready(function () {

    $("#button").on({//varias funciones para el mismo input
        click:function(){
        $("#menu").toggle();
    },mouseenter:function(){
        $(this).css({"border":"1px solid red","color":"blue"});
    },mouseleave:function(){
        $(this).css({"border": "0px","color":"black"});
    }})
})