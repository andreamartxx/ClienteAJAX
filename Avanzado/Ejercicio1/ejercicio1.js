window.addEventListener("load", ()=>{

    var str = "";
    
    document.getElementById("selector").addEventListener("change",()=>{
        //this no funciona
        enviarElemento(document.getElementById("selector").value);
    });

})

    function enviarElemento(str){
        if (str == "") {
            document.getElementById("contenido").innerHTML = "";
            return;
          } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function() {
                document.getElementById("contenido").innerHTML = this.responseText;
            };
            xmlhttp.open("GET","script.php?q="+str);
            xmlhttp.send();
          }
    }

