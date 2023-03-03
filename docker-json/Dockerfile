# Este archivo Dockfile contiene la información para poder hacer una 
#imagen de json server

# Angular como json server utilizan node para poder correr
# Aquí node se encuentra corriendo sobre una versión de linux
# bastante liviana.
FROM node:19-alpine3.16 

# Aquí vamos a indicar en que puerto deseamos que se levante
# nuestro servidor de json
EXPOSE 3000

# Qué deseamos copiar y en dónde lo queremos pegar
COPY personal.json /opt/personal.json

# Este comando nos va a permitir arrancar e instalar las 
# dependencias que necesitemos y el servidor en sí
RUN yarn global add json-server

# Aquí tenemos la configuración para levantar nuestro servidor
# json dentro del contenedor
CMD ["json-server", "-H","0.0.0.0","/opt/personal.json"]

# El nombre de los archivos Dockerfile siempre empiezan con la D mayúscula
# y es el nombre que se colocará en dockerfile: del archivo
# docker-compose.yaml