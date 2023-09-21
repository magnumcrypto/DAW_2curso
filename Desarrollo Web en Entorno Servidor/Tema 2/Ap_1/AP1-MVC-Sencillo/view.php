<?php

declare(strict_types=1);
$template = file_get_contents('templates/template.html');
foreach ($array_asociativo as $key => $value) {
    $template = str_replace('{' . $key . '}', $value, $template);
};
echo $template;
