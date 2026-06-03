const express = require('express');
const logger = require('./middlewares/logger');
const usersRouter = require('./routes/users');
const app = express();

// middlewares globales
app.use(express.json()); // leer JSON del body
app.use(logger);

// rutas
app.use('/usuario', usersRouter);

const PORT = 3002;

app.listen(PORT,() => 
    {
        console.log('hola ', PORT);
    }
);