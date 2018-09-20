const connection = require('./')

module.exports = {
  getPosts
}

// Sample only: think about what you want this function to actually do...
function getPosts (db = connection) {
  return db('posts').select()
}
