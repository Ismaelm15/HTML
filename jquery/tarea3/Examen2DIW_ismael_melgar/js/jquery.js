$(document).ready(function () {
    $("nav#msecundario>ul>li").hover(function () {
        $(this).children().css("background-color", "red");
    }, function (){$(this).children().css("background-color", "white")})
})