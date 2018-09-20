const express = require('express')
const path = require('path')

const users = require('./routes/users')
const posts = require('./routes/posts')

const server = express()

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, 'public')))
}

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

server.use(express.json())
server.use('/api/v1/users', users)
server.use('/api/v1/posts', posts)

// In production, serve any request not covered by the above as the built index
// from CRA's `yarn build` (for BrowserRouter)
if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'))
  })
}

module.exports = server
