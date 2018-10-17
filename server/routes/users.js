const express = require('express')
const verifyJwt = require('express-jwt')

const {checkHash} = require('../auth/hash')
const token = require('../auth/token')
const db = require('../db/users')

const router = express.Router()

router.post(
  '/register',
  register,
  token.issue
)

router.post(
  '/login',
  login,
  token.issue
)

router.get(
  '/',
  verifyJwt({secret: process.env.JWT_SECRET}),
  getUsers
)

// Secure route.
router.delete(
  '/user/:id',
  verifyJwt({secret: process.env.JWT_SECRET}),
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
    .catch(() =>
      res.status(500).json({
        ok: false,
        message: 'An error occured while retrieving the users.'
      })
    )
}

// Register a new user.
function register (req, res, next) {
  // Get post data to be stored.
  const {username, password} = req.body

  // Perform insertion.
  db.createNewUser(username, password)

    // Handle success.
    .then(id => {
      console.log('id ret as', id[0])
      // Store the new users ID in local state.
      res.locals.userId = id[0]

      // Progress to the next middleware stack function.
      next()
    })

    // Handle errors.
    .catch(({message}) => {
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

function login (req, res, next) {
  const {username, password} = req.body

  return db.getUserByUsername(username)
    .then(user => {
      if (!user) {
        return res.status(400).json({
          ok: false,
          error: 'That user does not exist.'
        })
      }

      const {passwordHash, id} = user

      checkHash(passwordHash, password)
        .then(ok => {
          if (!ok) {
            return res.status(403).json({
              ok: false,
              error: 'Password incorrect.'
            })
          }

          res.locals.userId = id
          next()
        })
    })
    .catch(() => res.status(500).json({
      ok: false,
      error: 'An unknown error occurred.'
    }))
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
    .catch(({message}) => {
      // Internal server error.
      res.status(500).json({
        ok: false,
        message: 'Something bad happened. We don\'t know why.'
      })
    })
}

module.exports = router
