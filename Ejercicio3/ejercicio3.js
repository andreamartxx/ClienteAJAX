
window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("boton").addEventListener("click", ()=>{

        XMLHttpRequestObject.responseType = 'blob';

        //no se puede hacer porque no puede cambiarse el tipo

        sacardatos("imagen2.jpg",XMLHttpRequestObject);

    });

}

    function sacardatos(datos, XMLHttpRequestObject){

        XMLHttpRequestObject.responseType = 'blob';

        if(XMLHttpRequestObject){

            var lugar = document.getElementById("imagen");

            XMLHttpRequestObject.open("GET", datos);

            XMLHttpRequestObject.onreadystatechange = ()=>{
                
                if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

                    var blob = XMLHttpRequestObject.response;
                    
                    lugar.src = window.URL.createObjectURL(blob);

                }
                
            }

        }

        XMLHttpRequestObject.send(null);

    }