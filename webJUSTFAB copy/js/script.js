/*Al hacer varias líneas de scroll en el documento se debe mostrar el botón VOLVER ARRIBA. 
Al volver a la parte superior de la página el botón se oculta. Al hacer clic sobre el botón 
nos vamos a la parte superior de la página. Todo se hace con efectos. HECHO
El menú se debe mostrar y ocultar utilizando efectos y debes controlar la acumulación de efectos en la cola.
Cada opción del submenú se muestra con un efecto y al mostrar una se ocultan todas las demás.*/

    $("nav#menu-principal > ul#menu").css("display", "none");
    $(document).ready(function () {


    var SliderModule = (function () {
        var pb = {};//<-- esto crea un objeto
        pb.elslider = $("#slider");//<-- esto almacena el id slider en el objeto
        pb.items = {
            panels: pb.elslider.find(".slider-wrapper > li")//<-- ¿?¿?¿?¿?¿?¿?¿?
        }
        var SliderInterval,//<-- intervalo de cambio
            currentSlider = 0,//<-- foto actual
            nextSlider = 1; //<-- foto siguiente
        lengthSlider = pb.items.panels.length;//<--longitud total 

        pb.init = function (settings) {
            this.settings=settings||{duration:1500};
            var loscontroles = '';
            SliderInit(); //<-- crea el constructor¿?¿?¿?¿?¿?

            for(var i=0; i<lengthSlider; i++){

                if (i==0){
                    loscontroles+='<li class="active"></li>';
                }else{
                    loscontroles+="<li></li>";
                }
            }
            $("#control-buttons").html(loscontroles);

            $("#control-buttons li").click(function () {
                console.log(currentSlider);
                console.log($(this).index());
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
            });
        }

        var SliderInit = function () {//<-- define el constructor¿?¿?¿?¿?¿?
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        pb.startSlider = function () {//<-- ¿?¿?¿?¿?¿?
            var paneles = pb.items.panels; //paneles del slider
            var controles = $("#control-buttons li");
            // console.log("mensaje");
            if (nextSlider >= lengthSlider) {//if para no hacer un outOfBounds y que pase al primero
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass("active");
            controles.eq(nextSlider).addClass("active");

            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(nextSlider).fadeIn("slow");

            // console.log(nextSlider);
            currentSlider = nextSlider;
            nextSlider++;
        }



        var cambiarPanel = function (indice) {
            var controles = $("#control-buttons li");
            clearInterval(SliderInterval);
            var paneles = pb.items.panels;
            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }
            // alert();
            controles.removeClass("active");
            controles.eq(indice).addClass("active");

            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(indice).fadeIn("slow");

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit();
        }
        //hacer el resto de ejercicios a partir de aqui

        return pb;

    }());

    SliderModule.init({duration:2000});



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
   

})
