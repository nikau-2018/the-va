/* 
  FILE:   HASH
  VER:    1.0.0
  DESC:   Module to generate a hash from a plan string.
  INPUT:  STRING
  OUTPUT: STRING
  ------------------------------------------------------------------------
*/

// File dependencies.
const sodium = require('libsodium-wrappers')

// File exports
module.exports = {
  generateHash
}

// HELPER FUNCTION
// Generate Hash
function generateHash (password) {

  // Initialise sodium.
  return sodium.ready.then(() =>
    sodium.crypto_pwhash_str(
      password,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_MIN
    )
  )
}