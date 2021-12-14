<?php

    $name=$_POST["envioNombre"] ?? "";

    if (strlen($name) > 0) {
       echo $name;
    }else {
        echo strlen($name);
        echo "Error";
    }