
window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("boton").addEventListener("click", ()=>{

        sacardatos("scriptOperacion.js", XMLHttpRequestObject);

    });


}

function sacardatos(datos, XMLHttpRequestObject){

    if(XMLHttpRequestObject){

        document.getElementById("contenido");

        XMLHttpRequestObject.open("GET", datos);

        XMLHttpRequestObject.onreadystatechange = ()=>{
            
            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

                eval(XMLHttpRequestObject.responseText);

            }
            
        }

        XMLHttpRequestObject.send(null);
    }

}
