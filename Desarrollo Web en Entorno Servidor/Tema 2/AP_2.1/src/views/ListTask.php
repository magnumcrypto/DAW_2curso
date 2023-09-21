<?php

declare(strict_types=1);

namespace App\Views;

class ListTask
{
    //Listado de tareras para la tabla
    public function __construct(array $rows = null)
    {
        if (is_null($rows)) {
            //No hemos recibido nada por lo que debemos indicarlo.
            echo "No se han recibido datos para mostrar en la vista de Detalle";
            echo "<p><a href='/?ruta=default'>volver</p>";
        } else {
            if (count($rows) > 0) {
                echo "<table border='1'>";
                echo "<tr><td>Título</td><td>Descripción</td><td>Fecha de Creación</td><td>Fecha de Vencimiento</td></tr>";
                foreach ($rows as $row) {
                    echo "<tr><td><a href='/?ruta=detalle&params=" . $row["id"] . "'>" . $row["titulo"] .
                        "</a><td>" . $row["descripcion"] . "</td><td>" . $row["fecha_creacion"] . "</td><td>" . $row["fecha_vencimiento"] . "</td></tr>";
                }
                echo "</table>";
            } else {
                echo "0 results";
                echo "<p><a href='/?ruta=default'>volver</p>";
            }
        }
    }
}
