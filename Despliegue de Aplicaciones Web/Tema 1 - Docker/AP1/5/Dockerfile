# Utiliza la imagen base de Alpine Linux
FROM alpine:latest

# Actualiza el sistema y luego instala Nginx
RUN apk update && apk upgrade && apk add nginx

# Expon el puerto 80 para que Nginx pueda ser accesible
EXPOSE 80

# Comando para iniciar Nginx automáticamente cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]