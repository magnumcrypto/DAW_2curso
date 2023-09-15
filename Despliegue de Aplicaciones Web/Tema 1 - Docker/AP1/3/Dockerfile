# Utiliza la imagen base de Ubuntu 20.04
FROM ubuntu:20.04

# Actualiza lista de paquetes y actualiza paquetes del SO
RUN apt-get update 
RUN apt-get upgrade -y 
RUN apt-get install -y apt-utils nodejs npm 
RUN apt-get clean

# Comando por defecto al iniciar el contenedor
CMD ["bash"]