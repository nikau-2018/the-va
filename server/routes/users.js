const express = require('express')
const verifyJwt = require('express-jwt')

const token = require('../auth/token')
const db = require('../db/users')
const { createToken } = require('../auth/token')
const { checkHash } = require('../auth/hash')

const router = express.Router()

router.post(
  '/register',
  register,
  token.issue
)

router.post('/login', login)

router.get('/', getUsers)

// Secure route.
router.delete(
  '/user/:id',
  deleteUser
)

function getUsers (req, res) {

    // Query the DB.
    db.getUsers()

    // Handle success.
    .then(records => 
        res.status(200).json({
          ok: true,
          records
        })
      )

    // Handle error.
    .catch(err => 
      res.status(500).json({
        ok: false,
        message: 'An error occured while retrieving the users.'
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
      console.log(id)
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
        message: 'Something bad happened. We don\'t know why.'
      })
    })
}

// Delete a users record.
function deleteUser (req, res) {
  const id = Number(req.params.id)

  // Perform DB deletion.
  db.deleteUser(id)

    // Handle success.
    .then(() => {
      res.status(200).json({
        ok: true,
        message: 'User deleted successfully.'
      })
    })

    // Handle error.
    .catch(({ message }) => {

      // Internal server error.
      res.status(500).json({
        ok: false,
        message: 'Something bad happened. We don\'t know why.'
      })
    })
}

// Login user.
function login (req, res) {

  // Getting the user information.
  const { username, password } = req.body

  // Return the user.
  return db.getUser(username)

    // Handle success.
    .then(user => {
      // Check username exists.
      if (!user) {
        return res.status(400).json({
          ok: false,
          message: 'That user does not exist!.'
        })
      }
      
      // Compare hash with user input password.
      const { id, username, password_hash } = user
      
      checkHash (password_hash, password) 
        .then(ok => {
          if (!ok) {
            return res.status(403).json({
              ok: false,
              error: 'Password incorrect.'
            })
          }

          // Get token.
          const token = createToken(id)

          // Return the user.
          return res.status(201).json({
            ok: true,
            user: { id, username },
            token
          })
        })
    })

    // Handle error.
    .catch(() => res.status(500).json({
      ok: false,
      error: 'An unknown error occurred'
    }))
}

module.exports = router
