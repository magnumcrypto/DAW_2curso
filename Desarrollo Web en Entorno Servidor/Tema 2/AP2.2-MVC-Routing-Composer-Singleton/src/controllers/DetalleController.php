<?php

namespace AP22\Controllers;

use AP22\Models\Tareas;
use AP22\Views\DetalleTarea;

/**
 * Controlador para la ruta /detalle
 */
class DetalleController
{
        public function detail($id = null){
            if(is_null($id)){
                //Hemos recibido un nulo por id, por lo tanto le enviamos también nulo para que no se muestren datos.
                $data = null;
            }else{
                //En este caso el controller únicamente debe preocuparse de hablar con el Modal y le da igual como se
                //conecta este con la BB.DD.
                $tarea = new Tareas();
                //Ahora recibimos todos los datos que existan con la id solicitada, si no existen la vista lo procesa.
                $data = $tarea->findById($id);
            }
            $view = new DetalleTarea($data);
        }
}