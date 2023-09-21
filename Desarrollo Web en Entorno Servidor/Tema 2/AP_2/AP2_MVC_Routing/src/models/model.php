<?php

declare(strict_types=1);
namespace Models;

use PDO;
use PDOException;


class Connection
{
    protected ?PDO $conn;

    protected function connect()
    {
        $config = json_decode(file_get_contents(__DIR__ . "/../config/dba.json"), true);
        try {
            $this->conn = new PDO(
                "mysql:host=" . $config["host"] . ";dbname=" . $config["dbname"] . ";port=" . $config["port"],
                $config["user"],
                $config["password"]
            );
        } catch (PDOException $exception) {
            echo "Connection failed: 404" . $exception->getMessage();
        }
    }

    protected function disconnect()
    {
        if (isset($this->conn)) $this->conn = null;
    }
    public function __destruct()
    {
        $this->disconnect();
    }
}
