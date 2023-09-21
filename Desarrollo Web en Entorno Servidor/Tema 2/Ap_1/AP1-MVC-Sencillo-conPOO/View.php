<?php

class View{

    private array $data;
    private string $template;

    public function setData(array $data): void
    {
        $this->data = $data;
    }

    public function __construct(array $datos=null)
    {
        $this->template = "assets/template.html";
        //Comprobamos si hemos recibido o no datos o un nulo.
        //Si hemos recibido datos procedemos a crear la plantilla
        if(!is_null($datos)){
            $this->data = $datos;
            $this->mostrarPlantilla();
        }
    }

    /**
     * Mos permite mostrar la vista
     */
    public function mostrarPlantilla(){
        //Cargamos la plantilla HTML
        include_once "assets/template.html";
    }

}
