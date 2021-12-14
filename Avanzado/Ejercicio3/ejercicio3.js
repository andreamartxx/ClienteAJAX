
window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("botonPĥp").addEventListener("click", ()=>{

        sacardatos(XMLHttpRequestObject);

    });

}

function sacardatos(XMLHttpRequestObject){

    var name = document.getElementById("nombre");

    var query = "envioNombre=" +name.value;
    
    if(XMLHttpRequestObject){

        var lugar = document.getElementById("contenedor");

        XMLHttpRequestObject.open("POST", "script.php");

        XMLHttpRequestObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        XMLHttpRequestObject.onreadystatechange = ()=>{
            
            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

                lugar.innerHTML = XMLHttpRequestObject.responseText;

            }
            
        }

        XMLHttpRequestObject.send(query);
    }

}

