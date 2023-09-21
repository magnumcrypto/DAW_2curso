<?php

require_once "Model.php";
require_once "View.php";

class Controller{

    private Model $modelo;
    private View $vista;
    private array $datos;


    /**
     * Este método se encarga de recibir los datos que estan cargados en el modelo.
     * @return void
     */
    private function pedirDatos(){
        if(!isset($this->modelo)){
            //Si no existe el objeto modelo entonces lo creamos
            $this->modelo = new Model();
        }
        //Recuperamos del modelo los datos que están almacenados.
        $this->datos = $this->modelo->getData();
    }

    /**
     * Este método se encarga de enviar los datos al modelo.
     * @return void
     */
    private function enviarDatos(){
        //Comprobamos si el Modelo ya se ha creado y si es así no sé instancia de nuevo.
        if(!isset($this->modelo)){
            $this->modelo = new Model();
        }
        //Guardamos los datos mediante el Setter del Modelo.
        $this->modelo->setData($this->datos);
    }

    /**
     * Método que se encarga de enviar los datos a la vista y de volver a cargarla.
     * @return void
     */
    public function enviarDatosVista(){
        //Verificamos que no se haya creado la vista con anterioridad.
        if(!isset($this->vista)){
            $this->vista = new View();
        }
        //Solicitamos los datos almacenados en el Modelo
        $this->pedirDatos();
        //Enviamos los datos a la vista para garantizar que le han llegado.
        $this->vista->setData($this->datos);
        //Mostramos la vista de nuevo para recoger los nuevos datos enviados.
        $this->vista->mostrarPlantilla();
    }

    /**
     * Método que se encarga de enviar recibir los datos y guardarlos en el modelo.
     * @param array $data
     * @return void
     */
    public function recibirDatosYalmacenar(array $data){
        //Guardamos los datos en la variable privada del controlador.
        $this->datos = $data;
        //Llamamos al método que se encarga de enviar los datos al Modelo para almacenarlos.
        $this->enviarDatos();

    }

}
?>