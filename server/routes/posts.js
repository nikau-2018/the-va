const express = require('express')
const verifyJwt = require('express-jwt')

const router = express.Router()

const db = require('../db/posts')

router.get('/', getPosts)

function getPosts (req, res) {
  db.getPosts()
    .then(posts => {
      res.status(200).json({posts})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

// Secure route.
router.get(
  '/user',
  verifyJwt({ secret: process.env.JWT_SECRET }),
  getUserPosts
  )

// Get all users posts.
function getUserPosts (req, res) {
  db.getUsersPosts(req.user.id)
    // Handle success.
    .then(posts => {
      res.status(200).json({posts})
    })
    // Handle errors.
    .catch(err => {
      res.status(500).json(err)
    })
}

router.get('/:id', getReplies)

function getReplies (req, res) {
  const postId = req.params.id
  db.getReplies(postId)
    .then(replies => {
      res.status(200).json({replies})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

router.post('/', submitPost)

function submitPost (req, res) {
  const postData = req.body.postData
  db.submitPost(postData)
    .then(id => {
      res.status(201).json({
        ok: true,
        postId: id[0]
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

router.post('/reply', submitReply)

function submitReply (req, res) {
  const replyData = req.body.replyData
  db.submitReply(replyData)
    .then(() => {
      res.status(201).json({
        ok: true
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = router
