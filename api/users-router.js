const express = require('express');

const User = require('./users-model')

const router = express.Router();

router.get('/', (req, res, next) => {
    User.get()
        .then(user => {
            res.json(users)
        })
        .catch(next)
});

router.get('/:id', (req, res) => {
    res.json(req.user)
});

router.post('/', (req, res, next) => {
    User.insert()
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
});

router.put('/:id', (req, res, next) => {
    User.update(req.params.id, { name: req.name})
    .then(() => {
        return User.getById(req.params.id)
    })
    .then(user => {
        res.json(user)
    })
    .catch(next)
});

router.delete('/:id', async (req, res, next) => {
    try {
        await User.remove(req.params.id)
        res.json(req.user)
    } catch(err) {
        next(err)
    }
});

module.exports = router;