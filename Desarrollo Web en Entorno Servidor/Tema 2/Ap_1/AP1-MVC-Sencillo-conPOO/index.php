<?php

    require_once ("Controller.php");

    //imaginemos que hemos recibido estos datos y tratados desde una fuente conocida y ahora debemos procesarlos según nos pida el cliente.
    $data = array(
    "title" => "MVC Sencillo PHP",
    "keyworks" => "arquitectura de software, poo, mvc, php",
    "description" => "ponemos en práctica el MVC en PHP",
    "content" => "El contenido del presente ejercico corresponde a la creación de
                        un modelo vista controlado, MVC en adelante, mediante el lenguaje
                        de programación PHP de un forma sencilla y haciendo uso de los
                        conocimientos previos que tienen los alumnos."
    );

    //Lo primero que debe hacer el index es cargar el controller para que se encargue de realizar la gestión adecuada.
    $controller = new Controller();
    //Posteríormente le enviamos los datos al Controlador para que se los envie al Modelo y los guarde
    $controller->recibirDatosYalmacenar($data);
    //Para finalizar enviamos los datos a la vista y posteriormente se mostrará de nuevo la vista.
    $controller->enviarDatosVista();
?>

