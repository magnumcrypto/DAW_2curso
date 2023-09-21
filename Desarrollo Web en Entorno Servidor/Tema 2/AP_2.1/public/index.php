<?php

declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';

use App\Core\{Dispatcher, RouteCollection, Request};

//Creamos un objeto de contenga todas las rutas de la aplicación
$route = new RouteCollection();

//Creamos un objeto que contenga la ruta que hemos recibido desde el navegador por GET
$request = new Request();

//Ahora creamos un objeto que se encarga de redirigir al controller que corresponda la aplicación
$dispatcher = new Dispatcher($route, $request);
