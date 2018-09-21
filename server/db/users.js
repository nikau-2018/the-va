const connection = require('./')
const generateHash = require('../auth/hash')

module.exports = {
  getUsers,
  getUserById,
  createNewUser
}

// Sample only: think about what you want this function to actually do...
function getUsers (db = connection) {
  return db('users').select('id', 'username')
}

// Retrieve a users record.
function getUserById (id, db = connection) {
  db('users').where({ id }).first()
}

// Create new user record.
function createNewUser (username, password, db = connection) {
  return generateHash(password)
    .then(hash => db('users')
      .insert({username, password_hash: hash})
    )
}
