
    $(document).ready(function () {
        $(document).keypress(function (e) { //coge el evento de pulsar y lo guarda en un bolsillo
            e.preventDefault();
            if (e.key == 'D' || 'd') {// el e.key te devuelve la tecla directamente
                $("img").siblings("h3").toggle();//hace lo del ejercicio1
            }
        })
    })

/*
    $(document).ready(function () {
        $(document).keypress(function(e){ //coge el evento de pulsar y lo guarda en un bolsillo
            if(String.fromCharCode(e.which)=='d'){//pasa de unicode a string la tecla que esta en el bolsillo
                $("img").siblings("h3").toggle();//hace lo del ejercicio1
            }
        })
    })
 
    $(document).ready(function () {
        $(document).keypress(function(e){
            if((e.which)==100||68){
                $("img").siblings("h3").toggle();
            }
        })
    })
 */