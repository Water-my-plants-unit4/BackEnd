require('dotenv').config();

const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')

<<<<<<< HEAD
// const usersRouter = require('../api/plants/plants-router')
=======
// const usersRouter = require('../api/auth/users-router')
>>>>>>> 301a37e2e51ce26f884cd5c6ac0ac910c64a268b
// const plantsRouter = require('../api/plants/plants-router')

const server = express();

// server.use(helmet())
// server.use(cors())
// server.use(express.json());
// server.use(session({
//   resave: false,
//   saveUniitialized: false,
//   secret: process.env.JWT_SECRET,
// }))

// server.use('/auth', usersRouter)
// server.use('/plants', plantsRouter)

server.get('/', (req, res) => {
  const time = new Date()
  res.status(200).json({message: `server is running ${time.toLocaleString()}`});
});

module.exports = server;


