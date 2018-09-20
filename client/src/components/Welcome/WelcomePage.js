import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


export default function WelcomePage (props) {
  return (
    <div className='container welcomePage'>
      <div className='welcomeToTheVa'>
        <h1>
          WELCOME <br />
          to <br />
          The Vā
        </h1>
        <Link to="/login">
          <Button>Login</Button>
        </Link><br />
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  )
}
