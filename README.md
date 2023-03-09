Dependencias
Las dependencias instaladas en este proyecto son las siguientes:

bcrypt: Una biblioteca de cifrado de contraseñas que utiliza el algoritmo bcrypt para almacenar de manera segura contraseñas en una base de datos.
bcryptjs: Una alternativa a la biblioteca bcrypt que utiliza JavaScript puro en lugar de C++.
body-parser: Un middleware que analiza la solicitud entrante en el servidor y la convierte en un objeto JavaScript que se puede utilizar en el código.
cors: Un middleware que permite a los servidores especificar quién tiene permiso para acceder a los recursos en un servidor, en otros dominios.
dotenv: Una biblioteca que carga variables de entorno desde un archivo .env en el proceso de Node.js.
express: Un marco web de Node.js que permite crear fácilmente aplicaciones web y APIs.
helmet: Un middleware que ayuda a proteger aplicaciones web de ataques bien conocidos a través de encabezados HTTP adecuados.
jsonwebtoken: Una biblioteca que permite la creación y verificación de tokens JWT para la autenticación de usuarios.
mongoose: Una biblioteca de modelado de objetos de MongoDB diseñada para trabajar en un entorno asíncrono.
swagger-jsdoc: Un paquete que proporciona una forma de escribir la documentación de Swagger utilizando JSDoc.
swagger-ui-express: Un paquete que proporciona una forma de agregar fácilmente una interfaz de usuario de Swagger a una aplicación Express.
tsoa: Un marco de trabajo que permite escribir aplicaciones y servicios API de Node.js usando TypeScript y generar automáticamente la documentación de Swagger.

Scripts de NPM
Se han creado los siguientes scripts de NPM:

swagger: Genera la documentación de Swagger para la API.
dev: Inicia un servidor en modo de desarrollo que recarga automáticamente los cambios.
test: Ejecuta las pruebas unitarias escritas en Jest.
serve:coverage: Inicia un servidor para mostrar la cobertura de las pruebas unitarias en el navegador.
build: Genera una versión de desarrollo de la aplicación.
start: Inicia el servidor en modo de producción.
build:prod: Genera una versión de producción de la aplicación.

Variables de entorno
Las variables de entorno que se deben crear en el archivo .env son las siguientes:

PORT: El número de puerto en el que se ejecutará el servidor.
MONGODB_URI: La URL de la base de datos MongoDB.
JWT_SECRET: La clave secreta utilizada para firmar tokens JWT.
JWT_EXPIRATION_TIME: El tiempo de expiración de los tokens JWT en segundos.
