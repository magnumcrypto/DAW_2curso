<?php
//Para este caso lo que tenemos que hacer es indicarle al index donde está el archivo de autoload de Composer.
require_once "../vendor/autoload.php";

//Cuando se hace una llamada a los namespaces puede ser de forma individual o agrupando varios dentro de llaves, siempre
// y cuando la ruta sea compatible.
use AP22\Core\{Dispatcher,RouteCollection,Request};

//Creamos un objeto que contenga todas las rutas de la aplicación.
$route = new RouteCollection();
//Creamos un objeto que contenga la ruta que hemos recibido desde el navegador.
$request = new Request();
//Ahora creamos un objeto que se encarga de redirigir al controller que corresponda la aplicación
$dispacher = new Dispatcher($route,$request);



