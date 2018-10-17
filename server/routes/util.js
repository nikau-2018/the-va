const express = require('express')
const {adjectives, animals} = require('../../util/dictionary')

const router = express.Router()

router.get('/randomDisplayName', randomDisplayName)

function randomDisplayName (req, res) {
  res.status(200).json({displayName: randomWord(adjectives) + randomWord(animals)})
}

function randomWord (list) {
  let word = list[Math.floor(Math.random() * (list.length - 1))]
  return word.charAt(0).toUpperCase() + word.substr(1)
}

module.exports = router
