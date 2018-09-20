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
  return getPost(postId)
    .then(post => {
      postData.post = post
      return getReplies(postId)
        .then(replies => {
          postData.replies = replies
          return postData
        })
    })
}

function getPost (postId, db = connection) {
  return db('posts')
    .select()
    .where('id', postId)
}

function getReplies (postId, db = connection) {
  return db('replies')
    .select()
    .where('postId', postId)
}
