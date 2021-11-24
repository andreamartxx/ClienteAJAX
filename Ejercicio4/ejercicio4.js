
window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("boton").addEventListener("click", ()=>{

        sacardatos('libros.xml', XMLHttpRequestObject);

    });

}

function sacardatos(datos, XMLHttpRequestObject){

    if(XMLHttpRequestObject){

        var lugar = document.getElementById("contenido");

        XMLHttpRequestObject.open("GET", datos);

        XMLHttpRequestObject.onreadystatechange = ()=>{
            
            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

                var documentoXml = XMLHttpRequestObject.responseXML;

                txt = "";

                elemento = documentoXml.getElementsByTagName("Obras_literarias")

                //recorrer todos los elementos del documento XMl

                for(var i = 0; i < elemento.length; i++){ 

                    txt += elemento[i].childNodes[0].nodeValue + '"<br>"';
                  
                }

                lugar.innerHTML = XMLHttpRequestObject.responseText;

            }
            
        }

        XMLHttpRequestObject.send(null);
    }

}
