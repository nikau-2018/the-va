const connection = require('./')
<<<<<<< HEAD
const { generateHash }  = require('../auth/hash')
=======
const { generateHash } = require('../auth/hash')
>>>>>>> 015081195595347fdc10248e4639855fa6653b18

module.exports = {
  getUsers,
  getUser,
  createNewUser,
  deleteUser
}

// Sample only: think about what you want this function to actually do...
function getUsers (db = connection) {
  return db('users').select('id', 'username')
}

// Retrieve a users record.
function getUser (username, db = connection) {
  return db('users').where('username', username).first()
}

// Create new user record.
function createNewUser (username, password, db = connection) {
  return generateHash(password)
    .then(hash => db('users')
      .insert({username, password_hash: hash})
    )
}

// Delete user record.
function deleteUser (id, db = connection) {
  return db('users').where('users.id', id).del()
}
