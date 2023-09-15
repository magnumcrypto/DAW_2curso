#Utilizamos la imagen base de Node.js 14 slim
FROM node:14-slim

#Copiamos las dependencias de nuestor json al directorio de Docker
COPY package.json /app/package.json

# Instala las dependencias de la aplicación (si es necesario)
RUN npm install

# Comando por defecto al iniciar el contenedor
CMD ["npm", "start"]