# Utilizamos imagen base última versión de Ubuntu
FROM ubuntu:latest

# apt-get -y update Actualizamos lista de paquetes
RUN apt-get -y update 

# apt-get -y upgrade Actualizamos los paquetes del SO a ultimas versiones
RUN apt-get -y upgrade 

# vim instalamos editor de texto , htop instalamos la herramienta
RUN apt-get -y install apt-utils vim htop

# Comando por defecto al iniciar el contenedor
CMD ["bash"]