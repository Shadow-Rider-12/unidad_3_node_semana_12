const express = require(`express`);
const router = express.Router();

//GET users localhost: 3000/users
router.get('/',
    (res) => {
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