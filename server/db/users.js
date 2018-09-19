const connection = require('./')

module.exports = {
  getUsers
}

// Sample only: think about what you want this function to actually do...
function getUsers (db = connection) {
  return db('users').select('id', 'username')
}
