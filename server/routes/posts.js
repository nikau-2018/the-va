const express = require('express')

const router = express.Router()

const db = require('../db/posts')

router.get('/', getPosts)

function getPosts (req, res) {
  db.getPosts()
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = router
