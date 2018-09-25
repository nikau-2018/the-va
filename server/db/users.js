const connection = require('./')
const { generateHash }  = require('../auth/hash')

module.exports = {
  getUsers,
  getUser,
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

//Change user name
function changeUserName (id, username, db = connection) {
  return db('users')
}
 // change user password
function changeUserPassword (id, password, db = connection) {

}