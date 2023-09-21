<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Core\DataBase;
use App\Models\Tasks;
use App\Views\ListTask;


class MainController
{

    public function main()
    {
        //Creamos una conexion a la BBDD e instanciamos el modelo de Tarea para poder acceder a los datos
        $task = new Tasks(new DataBase());
        //Ahora recibimos todos los datos que existen en la tabla
        new ListTask($task->findAll());
    }

    /*
    *Esta función nos permite acaparar cualquier ruta que no este definida previamente
    *para no mostrar codigos de error
    */
    function default()
    {
        echo "La ruta que buscas no existe";
    }
}
