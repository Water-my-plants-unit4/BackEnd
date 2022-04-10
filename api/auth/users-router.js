const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./users-model')

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        res.json(await User.find())
    } catch(err) {
        next(err)
    }
});

router.post('/register', async (req, res, next) => {
    try {
        const {username, password, phoneNumber} = req.body
        const user = await User.findBy({username}).first()
        if (user) {
            return res.status(409).json({
                message: "Username is taken"
            })
        } else {
            const newUser = await User.add({
                username,
                password: await bcrypt.hash(password, 8),
                phoneNumber
            })
            res.status(201).json(newUser)
        }
    } catch(err) {
        next(err)
    }
});

router.post('/login', async(req, res, next) => {
    try {
        const {username, password} = req.body
        const user = await User.findBy({username}).first()
        if (!user) {
            return res.status(401).json('Please enter valid username')
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return res.status(401).json({message:"Password is incorrect"})
        }
        const token = jwt.sign({
            userId: user.id
        }, process.env.JWT_SECRET)

        res.status(200).json({message: `Welcome ${user.username}`, token, user
        })
    }   catch(err) {
            next(err)
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const { username, password, phoneNumber} = req.body
        const userUpdate = await User.update({ phoneNumber, password: await bcrypt.hash(password, 8)}, req.params.id)
        res.status(200).json({ userUpdate: userUpdate, message: 'Updated!'})
    } catch(err) {
        next(err)
    }
});

router.get('/lotout', async (req, res, next) => {
    try {
        await req.session.destroy((err) => {
            if(err) {
                next(err)
            } else {
                res.status(204).end()
            }
        })
    } catch(err) {
        next(err)
    }
});

module.exports = router;