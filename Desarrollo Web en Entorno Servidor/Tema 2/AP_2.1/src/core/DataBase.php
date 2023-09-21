<?php

declare(strict_types=1);

namespace App\Core;

class DataBase
{
    private array $dbConfig;
    private $conn;

    public function __construct()
    {
        //Recogemos los datos de config decodificando el archivo JSON
        //dela configuracion de BBDD
        $this->dbConfig = json_decode(file_get_contents(__DIR__ . "/../../config/dbconfig.json"), true);
        $this->connect();
    }

    private function connect()
    {
        //Se definen las variables para crear la conexion a la BBDD
        $serverName = $this->dbConfig["server"];
        $userName = $this->dbConfig["user"];
        $password = $this->dbConfig["password"];
        $dbName = $this->dbConfig["dbname"];

        //Creamos la conexion
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
}
