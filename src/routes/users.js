/*const express = require('express');
const router = express.Router();

//GET users  localhost:3000/users
router.get('/' , 
    (req, res) => {
        res.json(
            {users: ['Daniel' , 'Scarlazzetta']}
        );
    }
);
//GET users whith id locaholst:3000/users:id
router.get('/:id', 
    (req, res) => {
        res.json(
            {id: req.params.id}
        );
    }
 );

module.exports = router;*/

//Modificacion para mostar más datos
const express = require('express');
const router = express.Router();

// Base de datos temporal en memoria
let users = [
  { id: 1, nombre: 'Aaron Alvares', edad: 20 },
  { id: 2, nombre: 'Franco Zuñiga', edad: 25 },
  { id: 3, nombre: 'Salvador Perez', edad: 40 },
];

// GET /usuarios — obtener todos - GetAll
router.get(
  '/', (req, res) => {
    res.json(users);
  }
);

//GET 
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
});


// POST /users — crear nuevo usuario
router.post('/', (req, res) => {
  const { nombre, edad } = req.body;
  const nuevoId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const nuevoUsuario = { id: nuevoId, nombre, edad };
  //hacemos uso del empujar 
  users.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});


module.exports = router;