
window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("botonPĥp").addEventListener("click", ()=>{

        sacardatos("script.php", XMLHttpRequestObject);

    });


}

function sacardatos(datos, XMLHttpRequestObject){

    if(XMLHttpRequestObject){

        var lugar = document.getElementById("contenido");

        XMLHttpRequestObject.open("POST", datos);

        XMLHttpRequestObject.onreadystatechange = ()=>{
            
            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

                lugar.innerHTML = XMLHttpRequestObject.responseText;

            }
            
        }

        XMLHttpRequestObject.send(null);
    }

}
