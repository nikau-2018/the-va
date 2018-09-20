const connection = require('./')

module.exports = {
  getPosts,
  getPostWithReplies
}

// Sample only: think about what you want this function to actually do...
function getPosts (db = connection) {
  return db('posts').select()
}

function getPostWithReplies (postId, db = connection) {
  const postData = {
    post: {},
    replies: []
  }
  return getPost(postId, db)
    .then(post => {
      postData.post = post
      return getReplies(postId, db)
        .then(replies => {
          postData.replies = replies
          return postData
        })
    })
}

function getPost (postId, db) {
  return db('posts')
    .select()
    .where('id', postId)
}

function getReplies (postId, db) {
  return db('replies')
    .select()
    .where('postId', postId)
}
