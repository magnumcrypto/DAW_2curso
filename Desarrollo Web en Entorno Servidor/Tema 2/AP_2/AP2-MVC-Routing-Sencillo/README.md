# DWES --> AP2 - Ejemplo de como realizar un MVC con Routing.

## Descripción:

Esta actividad práctica consiste en crear una aplicación sencilla, pero cumpliendo con el modelo MVC.
En este caso buscamos la sencillez y damos un paso más con respecto a la actividad AP1, y que se aplique
todo lo que sabes hasta ahora de OOP y MVC.
Vamos a pedirte como diferencial a la actividad anterior que crees un sistema de gestor de rutas en el que
únicamente tengamos un archivo frontController de inicio y sea él el que se encargue de redirigir a los
diferentes controllers que sean necesarios.

## Recursos generales:

Presentaciones y videos de Temas 2:
#### • Introducción a MVC

Material de apoyo:
#### • POO y MVC en PHP
#### • Y de más links del tema en Florida Oberta.
## Recursos adicionales:
#### • Script creación BB.DD. todolist en formato SQL.

## Actividades:
Para ello se pide:
### 1. Crea un proyecto con la estructura típica que se ha visto en el tema 2 de MVC.
### 2. La estructura de carpetas estará compuesta por:
#### • Public → Donde vamos a alojar el frontController, que llamaremos index.php, del proyecto como único punto de entrada al mismo. Además, en esta carpeta podemos depositar todos archivos como imágenes, css, etc… auxiliares de nuestro proyecto.
#### • Src → Contendrá la lógica de todo el proyecto mediante las siguientes subcarpetas:
###### • Controllers→ Estará contenida toda la lógica de los controladores que sea necesaria.
###### • Models→ Se adjunta un fichero SQL para exportar la BB.DD., todolist.sql. Con la que poder importarla a tú MySQL y generar las clases para obtener los datos necesarios. Toda la lógica del modelado de la BB.DD. debe estar en esta carpeta.
###### • Views→ No es necesario crear ningún motor de renderización. Genera clases capaces de mostrar por pantalla la información que se requiere, con una estructura de tabla será suficiente.
###### • Core → Se puede añadir esta carpeta extra, si necesitas crear clases adicionales que no cumplan los criterios de las anteriores y que sean de utilidad.
#### • Config → Obtén la información de conexión de BB.DD. desde un fichero JSON. Incorpora en el mismo (o en un fichero separado) el enrutado de la aplicación. Es decir, que rutas se corresponden con qué controladores. Crea las clases necesarias para la gestión de esta información.
### 3. La aplicación solo contendrá dos rutas:
#### 3.1. / o raíz → Es donde se listará el total de los registros de la BB.DD., incluyendo título y fecha de vencimiento.
#### 3.2. /detalle → Es donde se mostrará la totalidad de la información de una tarea.
### 4. Recomendable → Re-factoriza, si lo crees necesario, para cumplir los máximos principios SOLID que puedas.

## License

This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" /></a>


## Credits

Authors: Fernando A. Díaz-Alonso ([@fdiaz-alonso](https://github.com/fdiaz-alonso)) and David Soler
