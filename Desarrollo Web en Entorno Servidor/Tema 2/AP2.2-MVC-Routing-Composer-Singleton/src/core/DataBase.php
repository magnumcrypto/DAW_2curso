<?php

namespace AP22\Core;

use AP22\Core\Interfaces\IDataBase;

/**
 * Esta clase posee un sistema de conexión a la BB.DD. siguiendo un patrón Singleton
 */
class DataBase implements IDataBase
{
    private static $dbConfig;
    private static $conn;
    private static $instance;

    protected function __construct()
    {
        //Recogemos los datos de configuración decodificando el archivo JSON de la configuración de la BBDD
        self::$dbConfig = json_decode(file_get_contents(__DIR__."/../../config/dbConfig.json"),true);
        $this->connect();
    }

    /**
     * Creamos una instancia únicamente si no existe una previamente.
     * @return DataBase
     */
    public static function getInstance(){
        if(self::$instance == null){
            self::$instance = new DataBase();
        }
        return self::$instance;
    }
    /**
     * Genera la conexión a la BBDD
     * @return void
     */
    private function connect(){
        //Se definen las varíables para crear la conexión a la BBDD
        $servername = self::$dbConfig["server"];
        $username = self::$dbConfig["user"];
        $password = self::$dbConfig["password"];
        $dbName = self::$dbConfig["dbname"];

        //Creamos la conexión, pero en este caso debemos usar self en vez de this porque estamos haciendolo con
        //variables estáticas.
        self::$conn = new \mysqli($servername,$username,$password,$dbName);
    }

    /**
     * Función que ejecuta cualquier sentencia SQL que recibe y devuelve el resultado en un array asociativo
     * ESTA FUNCIÓN SE HA IMPLEMENTADO SÍ O SÍ PORQUE LO DEFINE EL INTERFAZ
     */
    public function executeSQL($sql){

        return self::$conn->query($sql)->fetch_all(MYSQLI_ASSOC);
    }

    /**
     * Se encarga de asegurarse que no se queda la conexión abierta consumiendo recursos
     */
    public function __destruct()
    {
        if(self::$conn != null){
            self::$conn->close();
        }
    }


}