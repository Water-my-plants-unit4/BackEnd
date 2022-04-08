require('dotenv').config();

const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')

// const usersRouter = require('../api/auth/users-router')
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


