
window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("botonJson").addEventListener("click", ()=>{

        sacardatos("script.json", XMLHttpRequestObject);

    });


}

function sacardatos(datos, XMLHttpRequestObject){

    if(XMLHttpRequestObject){

        var lugar = document.getElementById("contenedor");

        XMLHttpRequestObject.open("GET", datos);

        XMLHttpRequestObject.onreadystatechange = ()=>{
            
            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

              lugar.innerHTML = JSON.parse(XMLHttpRequestObject.responseText);

            }
            
        }

        XMLHttpRequestObject.send(null);
    }

}
