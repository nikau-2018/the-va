const connection = require('./')

module.exports = {
  getPosts,
  getReplies
}

// Sample only: think about what you want this function to actually do...
function getPosts (db = connection) {
  return db('posts')
    .select()
}

function getReplies (postId, db = connection) {
  return db('replies')
    .select()
    .where('postId', postId)
}
