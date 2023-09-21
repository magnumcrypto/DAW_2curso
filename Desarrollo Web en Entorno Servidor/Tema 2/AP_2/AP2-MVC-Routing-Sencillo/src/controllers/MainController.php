<?php

namespace AP2\Controllers;

use AP2\Core\DataBase;
use AP2\Models\Tareas;
use AP2\Views\ListadoTareas;

class MainController
{

    public function main(){
        //Creamos una conexión a la BB.DD. e instanciamos el modelo Tarea para poder acceder a los datos.
        $tarea = new Tareas(new DataBase());
        //Ahora recibimos todos los datos que existan en la tabla.
        new ListadoTareas($tarea->findAll());
    }

    /**
     * Esta función nos permite acaparar cualquier ruta que no este definida previamente para no mostrar códigos de error
     * @return void
     */
    function default(){
        echo "La ruta que buscas no existe.\n";
    }
}