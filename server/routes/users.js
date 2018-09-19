const express = require('express')

const router = express.Router()

router.get('/', getUsers)

function getUsers (req, res) {
  res.json({ ok: true })
}

module.exports = router
