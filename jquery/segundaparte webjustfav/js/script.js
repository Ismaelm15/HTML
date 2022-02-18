$(document).ready(function() {
    // $("nav#menu-principal > ul#menu").css("display", "none");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("header#top").stop(true, true).fadeIn();
        }
        if ($(this).scrollTop() > 300) { //coge como referencia (0) la parte de arriba de la pagina (window) y cuando es superior a 300px muestra el boton
            $('#volverarriba').stop(false, true).fadeIn(); // el primero limpia la cola y el segundo finaliza la animacion al momento
        } else {
            $('#volverarriba').fadeOut();
        }

        if ($(this).scrollTop() > 30) {
            $("header#top>div").animate({
                opacity: '0.8'
            });
            $("header#top>div").css("position", "fixed");
            $("header#top>div").css("width", "100%");
        } else {

            $("header#top>div").css("opacity", "1");

            $("header#top>div").css("position", "static");
        }
    })

    $("#volverarriba").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    //menu
    var abierto = 0;

    $('.negro').click(function() {
        if (abierto == 1) {
            $("header#top>div>nav#menu-principal>ul#menu").animate({ left: "-18rem" });
            abierto = 0;
            $("main").css("margin-left", 0);
            $("header> nav#menu-secundario").css("margin-left", 0);
            $("header >p#promo").css("margin-left", 0);
            $("div.negro").css("background-color", "");
            $("div.negro").css("opacity", 1);
        }
    });

    $('nav#menu-principal>span').click(function() {
        if (abierto == 0) {
            $("header#top>div>nav#menu-principal>ul#menu").animate({ left: "0rem" });
            abierto = 1;
            $("main").css("margin-left", 250);
            $("header >nav#menu-secundario").css("margin-left", 250);
            $("header >p#promo").css("margin-left", 250);
            $("div.negro").css("background-color", "black");
            $("div.negro").css("opacity", 0.7);

        } else {
            $("header#top>div>nav#menu-principal>ul#menu").animate({ left: "-18rem" });
            abierto = 0;
            $("main").css("margin-left", 0);
            $("header> nav#menu-secundario").css("margin-left", 0);
            $("header >p#promo").css("margin-left", 0);
            $("div.negro").css("background-color", "");
            $("div.negro").css("opacity", 1);
        }
    })

    $('ul#menu>li').click(function() {
        $(this).siblings().children('ul').slideUp();
        $(this).siblings().find('span').css('transform', 'rotate(0deg)');
        let submenu = $(this).children('ul').css('display') == 'none';
        if (submenu) {
            $(this).children().slideDown();
            $(this).find('span').css('transform', 'rotate(180deg)');
        } else {
            $(this).children('ul').slideUp();
            $(this).find('span').css('transform', 'rotate(0deg)');
        }
    });

    $("div.negro>main > article.item img").mouseenter(function() {
        let cadena = $(this).attr("src").split('.')[0];
        let cadenanueva = cadena + "-1.jpg";
        $(this).attr("src", cadenanueva);
    })

    $("article.item img").mouseleave(function() {
        let cadena = $(this).attr("src").replace("-1", "");
        $(this).attr("src", cadena);
    })



});