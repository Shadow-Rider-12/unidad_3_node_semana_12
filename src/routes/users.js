const express = require('express');
const router = express.Router();

//GET users localhost: 3000/users
router.get('/',
    (req, res) => {
        res.json(
            {users: ['Aaron', 'Alvares']}
        );
    }
);
//GET de user with id localhost:3000/users:id
router.get('/:id',
    (req, res) => {
        res.json({ id: req.params.id});
    }
);
module.exports = router;

//Modificacion para mostrar más datos

//Base de datos temporal en memoria
let users = [
    {id: 1, nombre: 'Aaron', edad: 20},
    {id: 2, nombre: 'Franco', edad: 21},
    {id: 3, nombre: 'Ezequiel', edad: 22},
];

//GET /users - obtener todos - GetAll
router.get('/', (req, res) => {
    res.json(users);
});

//GET /users/:id - obtener uno por id
router.get('/', (req, res) => {
    const user = user.find(
        u => u.id === parseInt(req.params.id)
    );
    if(!user){
        return res.status(404).json(
            {error: 'Usuario no encontrado'}
        )
    }
    res.json(user);
});
