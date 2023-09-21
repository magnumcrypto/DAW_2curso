<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\Request;
use App\Core\RouteCollection;

class Dispatcher
{

    private array $routeList;
    private Request $currentRequest;

    /* 
    *Para poder crear un objeto Dispatcher debemos enviar las rutas de la app y la URI del navegador
    *para que el dispatcher pueda derigir al lugar controller correcto con los parámetros adecuados
    */
    public function __construct(RouteCollection $routeCollection, Request $request)
    {
        $this->routeList = $routeCollection->getRoutes();
        $this->currentRequest = $request;
        $this->dispatch();
    }

    /* Redirigimos la aplicación al controlador adecuado */
    private function dispatch()
    {

        //verificamos que la ruta que hemos recibido está dentro de las rutas de la app
        if (isset($this->routeList[$this->currentRequest->getRoute()])) {
            //Esto seria un texto del tipo App\Controllers\DetalleController
            $controllerClass = "App\\Controllers\\" . $this->routeList[$this->currentRequest->getRoute()]["controller"];
            //Es equivalente a $controller = new App\Controllers\MainController o DetailController
            $controller = new $controllerClass;
            //Es quivalente al texto main o detail
            $action = $this->routeList[$this->currentRequest->getRoute()]["action"];
            //Comprobamos que se han enviado o no parametros por la ruta y lanzamos la accion del controller
            if (!is_null($this->currentRequest->getParams())) {
                $params = $this->currentRequest->getParams();
                $controller->$action(...$params);
            } else {
                //Equivalente a $controller->main();
                $controller->$action();
            }
        } else {
            echo "La ruta no está accesible o no existe";
        }
    }
}
