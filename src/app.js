const express = requiere('express');
const logger = requiere('./middleware/logger');
const userRouter = requiere('./routes/user');
const app = express();

// middleware globales
app.use(express.json()); //leer JSON del body
app.use(logger);

//rutas
app.use('/users', userRouter);
app.listen(3000,
    () => console.log('Hola mundo')
);