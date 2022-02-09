
$(document).ready(function () {
    $("#mi-capa").click(function(evento){ 
        $(this).css("width",function(index,value){//el index funciona con magia aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            var aumento=prompt("¿Cuanto quieres aumentar?","25");
            return(parseInt(value)+parseInt(aumento))+"px";
        })
    })
})