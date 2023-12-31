<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8ccccf98352102201f7ad4fc9507da87
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Config\\' => 7,
        ),
        'A' => 
        array (
            'AP21\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Config\\' => 
        array (
            0 => __DIR__ . '/../..' . '/config',
        ),
        'AP21\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8ccccf98352102201f7ad4fc9507da87::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8ccccf98352102201f7ad4fc9507da87::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8ccccf98352102201f7ad4fc9507da87::$classMap;

        }, null, ClassLoader::class);
    }
}
