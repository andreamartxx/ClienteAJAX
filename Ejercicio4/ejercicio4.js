
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

                var root = documentoXml.getElementsByTagName("Obras_literarias")[0];

                var tope = root.getElementsByTagName("Libro").length;

                //recorrer todos los elementos del documento XMl
                for(var i = 0; i < tope; i++){ 
                    libro = root.getElementsByTagName("Libro")[i]; 
                    autor = libro.getElementsByTagName("Autor")[0].firstChild.nodeValue;
                    titulo = libro.getElementsByTagName("Titulo")[0].firstChild.nodeValue;
                    mostrar('contenido',"Autor: "+autor+", titulo: "+titulo+"<br/>");
                  }

                lugar.innerHTML = XMLHttpRequestObject.responseText;

            }
            
        }

        XMLHttpRequestObject.send(null);
    }

}

function mostrar(id, texto){
    if(document.getElementById){
        document.getElementById(id).innerHTML += texto;
    }
}
