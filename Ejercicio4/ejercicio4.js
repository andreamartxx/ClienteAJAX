

window.addEventListener(`click`, ()=>{

    muestraDatos();

  });
  
  function muestraDatos() {
      
    let peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = muestraContenido;

    peticionHttp.open('GET', 'libros.xml');
    
    peticionHttp.send(null);
  
    function muestraContenido() {

      if(peticionHttp.readyState == 4) {

        if(peticionHttp.status == 200) {

            var documentoXml = peticionHttp.responseXML;

            var root = documentoXml.getElementsByTagName("Obras_literarias")[0];
          
            var tope = root.getElementsByTagName("Libro").length;

          for(var i = 0; i < tope; i++){ 
            libro = root.getElementsByTagName("Libro")[i]; 
            autor = libro.getElementsByTagName("Autor")[0].firstChild.nodeValue;
            titulo = libro.getElementsByTagName("Titulo")[0].firstChild.nodeValue;
            muestraHTML('contenido', "Autor: " + autor + ", Titulo: "+titulo+"<br/>");
          }
        }
      }
    }

    function muestraHTML(id, texto){
      if(document.getElementById){
        document.getElementById(id).innerHTML += texto;
      }
    }
  }


  //otroEjemplo

  /* window.onload = function(){
    if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }
    document.getElementById("boton").onclick = sacardatos;
    
    }
    
    function sacardatos(){
    if(XMLHttpRequestObject) {
    XMLHttpRequestObject.open("GET","libros.xml");
    XMLHttpRequestObject.onreadystatechange = function(){
    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
    var xmlDoc = XMLHttpRequestObject.responseXML;
    var x = xmlDoc.getElementsByTagName("Libro");
    var texto = "";
    
    for(i = 0 ; i<x.length ; i++){
    texto+= x[i].getElementsByTagName("Autor")[0].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("contenido").innerHTML=texto;
    }
    }
    XMLHttpRequestObject.send(null);
    }
    } */