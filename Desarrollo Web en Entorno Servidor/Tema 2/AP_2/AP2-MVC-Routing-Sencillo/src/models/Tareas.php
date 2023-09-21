<?php

namespace AP2\Models;

use AP2\Core\DataBase;

class Tareas
{
    private DataBase $database;
    public function __construct(DataBase $database)
    {
        $this->database = $database;
    }

    /**
     * Función que nos devuelve todos los registros de la tabla Tarea
     */
    public function findAll(){
        $sql = "SELECT * FROM tareas";
        return $this->database->executeSQL($sql);
    }

    /**
     * Función que nos devuelve el contenido de una tarea para su id
     */
    public function findById($id){
        $sql = "SELECT * FROM tareas WHERE id=$id";
        $result = $this->database->executeSQL($sql);
        return array_shift($result);
    }
}