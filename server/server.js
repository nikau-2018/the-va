const express = require('express')
const path = require('path')

const users = require('./routes/users')

const server = express()

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, 'public')))
}

server.use(express.json())
server.use('/api/v1/users', users)

module.exports = server
