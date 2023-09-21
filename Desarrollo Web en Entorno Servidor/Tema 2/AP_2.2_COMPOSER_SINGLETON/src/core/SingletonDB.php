<?php

declare(strict_types=1);

namespace App\Core;

class SingletonDB
{
    private array $data;
    private static $instance;

    private function __construct()
    {
        $json = file_get_contents(__DIR__ . "/../../config/dbconfig.json");
        $this->data = json_decode($json, true);
    }

    public static function getInstance(): self
    {
        return self::$instance ?? (self::$instance = new SingletonDB());
    }

    public function get($key)
    {
        return $this->data[$key];
    }
}
