const connection = require('./')
const {generateHash} = require('../auth/hash')

module.exports = {
  getUsers,
  getUserById,
  getUserByUsername,
  createNewUser,
  deleteUser,
  changeUserName,
  changeUserPassword
}

// Sample only: think about what you want this function to actually do...
function getUsers (db = connection) {
  return db('users').select('id', 'username')
}

// Retrieve a users record.
function getUserById (id, db = connection) {
  return db('users').where({id}).first()
}

// Retrieve a user by username.
function getUserByUsername (username, db = connection) {
  return db('users').where({username}).first()
}

// Create new user record.
function createNewUser (username, password, db = connection) {
  return generateHash(password)
    .then(hash => {
      return db('users')
      .insert({username, password_hash: hash})
      .returning('id')
    })
}

// Delete user record.
function deleteUser (id, db = connection) {
  return db('users').where('users.id', id).del()
}

// Change user name
function changeUserName (id, username, db = connection) {
  return db('users')
}
// change user password
function changeUserPassword (id, password, db = connection) {

}
