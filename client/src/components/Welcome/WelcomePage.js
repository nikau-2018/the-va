import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage (props) {
  return (
    <div className='welcomeToTheVa'>
      <h1>
        WELCOME <br />
        TO <br />
        <span>The Vā</span>
      </h1>
      <Link to="/login">
        <button>Login</button>
      </Link><br />
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  )
}
