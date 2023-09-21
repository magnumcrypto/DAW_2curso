<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Models\Tasks;
use App\Core\DataBase;
use App\Views\DetailTask;

//Controllador para la ruta /detalle
class DetalleController
{
    public function detail($id = null)
    {
        if (is_null($id)) {
            //Hemos recib un nulo por id, por lo tanto le enviamos también nulo para que no se muestren datos
            $data = null;
        } else {
            //Creamos una conexión a la BB.DD e instanciamos el modelo Tarea para poder acceder a los datos
            $task = new Tasks(new DataBase());
            //Ahora recibimos todos los datos que existan en la id solicitada, si no existen la vista lo procesa
            $data = $task->findById($id);
        }
        $view = new DetailTask($data);
    }
}
