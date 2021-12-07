window.addEventListener("load", ()=>{

    let str = "";

    document.getElementById("selector").addEventListener("change",()=>{
        enviarElemento(str);
    })

})

    function enviarElemento(str){
        if (str == "") {
            document.getElementById("contenido").innerHTML = "";
            console.log("hola");

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

