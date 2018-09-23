const express = require('express')
const Moniker = require('moniker')

const router = express.Router()

router.get('/randomDisplayName', randomDisplayName)

function randomDisplayName (req, res) {
  let names = Moniker.generator([Moniker.adjective, Moniker.noun])
  res.status(200).json({displayName: names.choose()})
}

module.exports = router
