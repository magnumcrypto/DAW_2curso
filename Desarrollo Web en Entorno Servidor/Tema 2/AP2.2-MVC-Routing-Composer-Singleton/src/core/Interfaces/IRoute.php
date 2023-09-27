<?php

namespace AP22\Core\Interfaces;

/**
 * Esta interfaz nos permite garantizar que usemos el método que usemos al implemente como mínimo debe garantizar el método getRoutes.
 */
interface IRoute
{
    public function getRoutes();
}