
     $(document).ready(function () {
        $("input").focusin(function(){
            $(this).css({"background-color":"red","color":"black"});
        }).focusout(function(){
            $(this).css({"background-color":"white","color":"blue"}); //para poner varias reglas ({"background-color":"blue","text-decoration":"none"})
        })
    }) 
      
      
      
      /*  $(document).ready(function () {
        $("#contrasenia").focus(function(){
            $(this).css("background-color","red");
        }).blur(function(){
            $(this).css("background-color","white");
        })
    })

    $(document).ready(function () {
        $("#contrasenia").focus(function(){
            $(this).css("background-color","red");
        }),$("#contrasenia").blur(function(){
            $(this).css("background-color","white");
        })
    })*/