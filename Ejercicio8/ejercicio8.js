
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

              var valor = JSON.parse(XMLHttpRequestObject.responseText);
                lugar.innerHTML = "Nombre: " +valor.nombre+"<br>";
                lugar.innerHTML += "Apellido: " +valor.apellido+"<br>";
                lugar.innerHTML += "edad: " +valor.edad;

            }
            
        }

        XMLHttpRequestObject.send(null);
    }

}
