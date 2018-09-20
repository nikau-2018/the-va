const express = require('express')
const verifyJwt = require('express-jwt')

const token = require('../auth/token')
const db = require('../db/users')

const router = express.Router()

router.post(
  '/register',
  register,
  token.issue
)

router.get('/', getUsers)

router.get(
  '/user',
  verifyJwt({ secret: process.env.JWT_SECRET }),
  getUser
)

function getUsers (req, res) {
  res.json({ ok: true })
}

// Get user by ID.
function getUser (req, res) {

  // Query the DB passing the token users ID.
  db.getUserById(req.user.id)

    // Handle success.
    .then(({ username }) => 

      // Return the username.
      res.json({
        ok: true,
        username
      })
    )

    // Handle errors.
    .catch(e => 
      res.status(500).json({
        ok: false,
        message: 'An error ocurred while retrieving your profile.'
      })
    )
}

// Register a new user.
function register (req, res, next) {

  // Get post data to be stored.
  const {username, password} =  req.body

  // Perform insertion.
  db.createNewUser(username, password)

    // Handle success.
    .then(([id]) => {

      // Store the new users ID in local state.
      res.locals.userId = id

      // Progress to the next middleware stack function.
      next()
    })

    // Handle errors.
    .catch(({ message }) => {
      if (message.includes('UNIQUE constraint failed: users.username')) {

        // Error if username exists in DB.
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }

      // Internal server error.
      res.status(500).json({
        ok: false,
        message: message
        // 'Something bad happened. We don\'t know why.'
      })
    })
}

module.exports = router
