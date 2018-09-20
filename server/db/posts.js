const connection = require('./')

module.exports = {
  getPosts,
  getReplies,
  submitPost,
  submitReply
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

function submitPost (postData, db = connection) {
  postData.createdAt = Date.now()
  return db('posts')
    .insert(postData)
}

function submitReply (replyData, db = connection) {
  replyData.createdAt = Date.now()
  return db('replies')
    .insert(replyData)
}
