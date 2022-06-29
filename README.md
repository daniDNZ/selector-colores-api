# Api Rest Selector de Colores
Api Rest creada en NodeJS y conectada a una BBDD MongoDB. La base de datos está alojada en Mongo Atlas y la conexión está configurada en `./mongo.js`.

## Prerrequisitos
* NodeJS
* npm

## Get started
* Instalar las dependencias con `npm install`.
* Iniciar el servidor con `npm start`.
* El servidor está alojado en `localhost:3001`, puedes modificar el puerto en `./index.js`.

## Endpoints
* GET `/api/palettes` -> Recupera todas las paletas
* DELETE `/api/palettes/:id` -> Elimina la paletta con el id indicado
* POST `/api/palettes` -> Añade una nueva paleta (Mirar formato)