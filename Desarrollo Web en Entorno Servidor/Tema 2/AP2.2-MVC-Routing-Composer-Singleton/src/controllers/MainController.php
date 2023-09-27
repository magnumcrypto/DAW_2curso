<?php

namespace AP22\Controllers;

use AP22\Models\Tareas;
use AP22\Views\ListadoTareas;

class MainController
{
    public function main(){
        //En este caso el controller únicamente debe preocuparse de hablar con el Modal y le da igual como se
        //conecta este con la BB.DD.
        $tarea = new Tareas();
        //Ahora recibimos todos los datos que existan en la tabla.
        new ListadoTareas($tarea->findAll());
    }
}