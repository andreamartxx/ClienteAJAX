window.addEventListener("load", ()=>{

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("enviar").addEventListener("click",()=>{
        enviarElemento();
    })

})

    function enviarElemento(){

        var lista = document.getElementById("selector");
        var opciones = lista.options[lista.selectedIndex].text;
        var impresion;

        impresion.innerHTML = "El azulejo seleccionado es: " +opciones;

    }