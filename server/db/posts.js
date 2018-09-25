const connection = require('./')

module.exports = {
  getPosts,
  getReplies,
  submitPost,
  submitReply,
  getUsersPosts,
  deletePost
}

// Sample only: think about what you want this function to actually do...
function getPosts (db = connection) {
  return db('posts')
    .select()
    .orderBy('id', 'desc')
}

// Get users posts.
function getUsersPosts (userId, db = connection) {
  return db('posts')
    .where('posts.user_id', userId)
    .select()
}

function getReplies (postId, db = connection) {
  return db('replies')
    .select()
    .where('postId', postId)
}

function submitPost (postData, db = connection) {
  return db('posts')
    .insert(postData)
}

function submitReply (replyData, db = connection) {
  return db('replies')
    .insert(replyData)
}

function deletePost (postId, db = connection) {
  return db('posts').where('id', postId).del()
}
