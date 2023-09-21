<?php

declare(strict_types=1);

namespace App\Core;

class Request
{
    private string $route;
    private array|null $params;

    public function __construct()
    {
        /* 
        *Lo primero que hacemos es confirmar que hemos recibido por GET un controller
        *si no fuera así saldremos por la ruta por defecto
        */
        if (isset($_GET["ruta"])) {
            $this->route = $_GET["ruta"];
            (isset($_GET["params"])) ? $this->params = explode(",", $_GET["params"]) : $this->params = null;
        } else {
            $this->route = "main";
            $this->params = null;
        }
    }

    public function getRoute(): string
    {
        return $this->route;
    }

    public function getParams(): array|null
    {
        return $this->params;
    }
}
