/*Al hacer varias líneas de scroll en el documento se debe mostrar el botón VOLVER ARRIBA. 
Al volver a la parte superior de la página el botón se oculta. Al hacer clic sobre el botón 
nos vamos a la parte superior de la página. Todo se hace con efectos. HECHO
El menú se debe mostrar y ocultar utilizando efectos y debes controlar la acumulación de efectos en la cola.
Cada opción del submenú se muestra con un efecto y al mostrar una se ocultan todas las demás.*/
$(document).ready(function () {
    $("nav#menu-principal > ul#menu").css("display", "none");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("header#top").stop(true, true).fadeIn();
        }
        if ($(this).scrollTop() > 300) { //coge como referencia (0) la parte de arriba de la pagina (window) y cuando es superior a 300px muestra el boton
            $('#volverarriba').stop(false, true).fadeIn();// el primero limpia la cola y el segundo finaliza la animacion al momento
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



    $("#volverarriba").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    $("nav#menu-principal > span").click(function () {
        $(this).siblings("ul#menu").stop(true, true).slideToggle();
    });


    $("ul#menu > li > a").click(// se tienen que ocultar los demas
        function (event) {
            event.preventDefault();
            let invisible=$(this).parent().children("ul").css("display") == "none";
            if (invisible) {
                $(this).parent().children("ul").stop(true, true).slideDown(400);
                $(this).children().children().toggleClass('fa fa-angle-down fa fa-angle-up');
                $(this).parent().siblings().children("ul").slideUp();
                if($(this).parent().siblings().children().children().children().className())
                $(this).parent().siblings().children().children().children().toggleClass('fa fa-angle-down fa fa-angle-up');
            } else {
                $(this).parent().children("ul").stop(true, true).slideUp(400);
                $(this).children().children().toggleClass('fa fa-angle-down fa fa-angle-up');
            }
        })

        
    $("article.item img").mouseenter(function(){
        let cadena= $(this).attr("src").split('.')[0];
        let cadenanueva=cadena+"-1.jpg";
        $(this).attr("src",cadenanueva);
    })

    $("article.item img").mouseleave(function(){
        let cadena=$(this).attr("src").replace("-1","");
        $(this).attr("src",cadena);
    })
   


});