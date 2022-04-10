require('dotenv').config();

const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')

// const usersRouter = require('../api/plants/plants-router')
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
  res.send('welcome');
});

module.exports = server;


