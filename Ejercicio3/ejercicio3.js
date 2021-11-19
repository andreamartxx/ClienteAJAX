
window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("boton").addEventListener("click", ()=>{

        sacardatos(XMLHttpRequestObject);

    });

}

function sacardatos(XMLHttpRequestObject){

    if(XMLHttpRequestObject){

        var lugar = document.getElementById("imagen");

        XMLHttpRequestObject.open("GET", "imagen2.jpg");

        XMLHttpRequestObject.onreadystatechange = ()=>{
            
            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

                lugar.src = XMLHttpRequestObject.responseText;

            }
            
        }

        XMLHttpRequestObject.send(null);
    }

}
