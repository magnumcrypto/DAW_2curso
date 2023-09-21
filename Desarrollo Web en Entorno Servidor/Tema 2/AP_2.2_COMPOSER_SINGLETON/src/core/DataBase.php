<?php

declare(strict_types=1);

namespace App\Core;

use App\Core\SingletonDB;

class DataBase
{
    private $conn;

    public function __construct()
    {
        //Recogemos los datos de config decodificando el archivo JSON
        //dela configuracion de BBDD
        $this->connect();
    }

    private function connect()
    {
        //Instanciamos la clase SingletonDB que no se instanciara mas veces
        $singleton = SingletonDB::getInstance();

        $serverName = $singleton->get("server");
        $userName = $singleton->get("user");
        $password = $singleton->get("password");
        $dbName = $singleton->get("dbname");

        $this->conn = new \mysqli($serverName, $userName, $password, $dbName);
    }

    /*
    *Función que ejecuta cualquier sentencia SQL que recibe
    *y devuelve el resultado en un array asociativo
    */
    public function executeSQL($sql): array
    {
        $result = $this->conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    /*Se encarga de asegurarse que no se queda la conexión abierta consumiendo recursos*/
    public function __destruct()
    {
        if ($this->conn !== null) $this->conn->close();
    }

    public function getSingletonInstance(): SingletonDB
    {
        return SingletonDB::getInstance();
    }
}
