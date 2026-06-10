# unidad_3_node_semana_12

# 1.- Crear el proyecto en node
    -Crear un proyecto con nodeJS, con el siguiente
    comando en la terminal:
    npm init -y
# 1.1.- Cuando descargamos el proyecto de otro lado:
    -Vamos a usar el siguiente comando para instalar las dependencias de NodeModules
    npm y
# 2.- Instalar Express(Paqueta para poder trabajar JavaScript como servidor)
    -Realizar la instalacion de un paquete
    de desarrollo:
    npm install express

# 3.- Crear estructura de carpetas para el proyecto:
    -Primero definimos la carpeta madre (src)
    -Crear el Main de la aplicación, que es el app.js
    -Creamos dos carpetas, una es para el ruter (definir
    -rutas) y la otra es para los middleware (puente).
    src/
    ----app.js <- Este es el main de la aplicación
    ----routes/
        ---users.js 
    ----middlewares/
        ---logger.js

# 4.- Creacion del logger.js
    Creamos el puente de la aplicación.
    logger.js

# 5.- Creacion de una ruta
    -Crearemos un usuario con datos parseados (meterlos a
    la mala) en la ruta. La ruta la usaremos para manejar las URL.
    users.js 

# 6.- Creación del Main
    -Definimos el cerebro la aplicación.
    app.js

# 7.-  Levantamos el servidor con el comando:
    Recordar que node es la palabra reservada, el 
    src es la ubicación de la carpeta y el app.js es el main
# 8.- Verificamos las rutas cambiando el puerto
    a de más agregamos una constante para reemplazar
    el numero del puerto
    const PORT = 3002;
# 9.- Agregamos mas Usurios en las Rutas:
   Para esto creamos un Array con dos usuarios nuervos
   en src/routes/users.js
# 10.- Instalacion de NodeMon:
    Este Pakage hace que no tengamos que
    bajar y levantar el servidor, se instala
    con el siguente comando:
    npm i -D nodemon
# 11.- Cambiamos el metodo de levantar el servidor:
    Ahora estamos ejecutando un Script, esto es gracias a 'nodemon'
    npm run dev