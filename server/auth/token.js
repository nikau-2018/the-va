/* 
  FILE:   TOKEN
  VER:    1.0.0
  DESC:   Module to generate and issue a JWT token as middleware.
  INPUT:  NONE
  OUTPUT: STRING
  ------------------------------------------------------------------------
*/

// File dependencies.
const jwt = require('jsonwebtoken')

// File exports.
module.exports = {
  issue,
  createToken
}

// HELPER FUNCTIONS
// Issue JWT token
function issue (req, res) {

  // Respond with JSON
  res.json({
    ok: true,
    message: 'Authenticated successfully.',

    // Call createToken helper function passing res.locals.userId
    token: createToken(res.locals.userId)
  })
}

// Create token
function createToken (id) {

  // Generate token 
  return jwt.sign(

    // local ID
    {id},

    // Secret key
    process.env.JWT_SECRET,

    // Optional: token expiry time in zeit/ms 86400000
    {expiresIn: '1d'}
  )
}
