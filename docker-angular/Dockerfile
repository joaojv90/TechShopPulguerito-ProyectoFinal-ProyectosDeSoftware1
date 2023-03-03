# PRIMERA FASE PARA CONSTRUIR UNA APLICACIÓN EN DOCKER
# Las versiones apline son las más ligeras
FROM node:19-alpine3.16 AS build-new

# Crea euna carpeta dentro del contenedor, en el directorio donde
# se va a almacenar la aplicación
WORKDIR /app

# Va a copiar todo lo que se encuentre en nuestro directorio dentro de
# la carpeta que creamos en el contenedor
# El primer punto hace referencia a la carpeta en donde está nuestro archivo Dockerfile 
# y el segundo en donde vamos a copiar
COPY . ./

# Aquí vamos a instalar dependencias: npm install nos sirve para instalar 
# todas las dependencias de nuestra aplicación
RUN npm install 

# npm run build sirve para construir un archivo simple de una aplicación sobre todo en Amgular
# tratando de poner la aplicación en modo de producción
# Va a crear una carpeta con las instrucciones básicas
RUN npm run build

# SEGUNDA FASE - nginx -> es un servidor ligero. 
# Después de los dos puntos viene la versión tomada de la página oficial de Docker

FROM nginx:1.23.3-alpine

# Va a ser la misma configuración, solo va a cambiar el nombre de la 
# carpeta en la posición de evaluacion
# Aquí le diremos que copie toda la aplicación con el nombre que le dimos
# en la parte superior en FROM en /app/dist/evaluacion/ y que lo arranque 
# en esta dirección /usr/share/nginx/html que es donde está corriendo ngnix
# Desde usr es una dirección de linux
COPY --from=build-new /app/dist/evaluacion/ /usr/share/nginx/html

# Aquí nos dice que la configuración que se encuentra en este archivo ./nginx.conf 
# se la envíe a esta dirección del contenedor /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Este comando se utilizaría en un linux para levantar nuestro servidor
CMD ["nginx", "-g","daemon off;"] 


