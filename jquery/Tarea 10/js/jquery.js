$(document).ready(function () {
    $("div.texto").hide();
    $("main > article > div >section > div > div").click(function () {
        let texto = $(this).parent().parent().find(".texto"); //encuentra al texto que hay debajo
        let invisible=texto.css("display")=="none"; //controla que el texto esté invisible o no

        if (invisible){//if para controlar la animacion del mas y el slideDown para bajarlo
            $(this).children("svg:last-child").css("transform", "rotate(0deg)");
            $(this).parent().parent().find(".texto").slideDown();
            $(this).parent().parent().siblings().find(".texto").slideUp();
            //muchos parent tiene que haber una manera mas facil
            $(this).parent().parent().siblings().children().children("svg:last-child").css("transform", "rotate(-90deg)");
            $(this).parent().parent().siblings().children("div").children("div").children("svg:last-child").css("transform", "rotate(90deg)");
        } else {
            $(this).children("svg:last-child").css("transform", "rotate(90deg)");
            $(this).parent().parent().find(".texto").slideUp();
        }
    })
})
