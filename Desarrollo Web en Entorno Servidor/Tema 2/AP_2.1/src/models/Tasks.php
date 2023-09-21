<?php

declare(strict_types=1);

namespace App\Models;

use App\Core\DataBase;

class Tasks
{
    private DataBase $dataBase;

    public function __construct(DataBase $dataBase)
    {
        $this->dataBase = $dataBase;
    }

    public function findAll()
    {
        $sql = "SELECT * FROM tareas";
        return $this->dataBase->executeSQL($sql);
    }

    public function findById($id)
    {
        $sql = "SELECT * FROM tareas WHERE id=$id";
        $result = $this->dataBase->executeSQL($sql);
        return array_shift($result);
    }
}
