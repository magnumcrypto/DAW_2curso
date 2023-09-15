# Utiliza la imagen base de Alpine Linux
FROM alpine:latest

# Copiamos el archivo html
COPY index.html /usr/share/nginx/html/index.html

# Actualiza el sistema y luego instala Nginx
RUN apk update && apk upgrade && apk add nginx

# Exponer el puerto 80 para que Nginx sea accesible
EXPOSE 80

# Comando para iniciar Nginx automáticamente cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]