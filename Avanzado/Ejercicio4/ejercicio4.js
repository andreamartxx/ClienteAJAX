//NO FUNCIONA

window.onload = function(){

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();
    }

    document.getElementById("comprobar").addEventListener("click", ()=>{

        sacardatos(XMLHttpRequestObject);

    });

}

function sacardatos(XMLHttpRequestObject){

    var mensaje = "";

    if(XMLHttpRequestObject){

        var lugar = document.getElementById("contenedor");
		
        XMLHttpRequestObject.open("POST", "script.php", true);

		XMLHttpRequestObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          
        XMLHttpRequestObject.onreadystatechange = ()=>{

            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
                
                var raiz1 = document.getElementsByTagName("respuesta");
                raiz = raiz1[0];
                
                var disponible = raiz.getElementsByTagName("disponible")[0].firstChild.nodeValue;
                
                lugar.innerHTML = XMLHttpRequestObject.responseText;

                if(disponible == "si") {
                    
                    document.getElementById("contenedor").innerHTML = "El nombre elegido ["+login+"] est� disponible";
                
                }
                else {
                   
                    mensaje = "NO está disponible el nombre elegido ["+login+"]. Puedes probar con las siguientes alternativas.";
                    
                    var alternativas = raiz.getElementsByTagName("alternativas")[0];
                    
                    var logins = alternativas.getElementsByTagName("login");
                    
                    mensaje += "<ul>";
                    
                    for(var i=0; i<logins.length; i++) {
                    
                        mensaje += "<li><a href=\"#\" onclick=\"selecciona('"+logins[i].firstChild.nodeValue+"'); return false\">"+logins[i].firstChild.nodeValue+"<\/a><\/li>";	
                    
                    }
                    
                    mensaje += "<\/ul>";
                    
                    document.getElementById("contenedor").innerHTML = mensaje;
                }
            }

        }
        
    }

    send(mensaje);
}

function send(mensaje, XMLHttpRequestObject){

    XMLHttpRequestObject.send();
}


