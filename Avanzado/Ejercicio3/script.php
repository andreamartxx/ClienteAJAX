<?php

    $name=$_POST["envioNombre"] ?? "";

    if (strlen($name) > 0) {
       echo "El nombre se ha enviado correctamente";
    }else {
        echo strlen($name);
        echo "Error";
    }