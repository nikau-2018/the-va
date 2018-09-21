import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

const Login = (props) => {
  return (
    <div className='login-container'>
      <h1>Log into The Vā</h1>
      <form>
        <p>Username: <input type="text" name="username" placeholder="Enter your username..." /></p>
        <p>Password: <input type="password" name="password" placeholder="Enter your password..." /></p>
        {/* TODO: Wire up login button
        <p><Button onClick={() => console.log('Not built yet...')}>Log in</Button></p> */}
        <p><button onClick={() => console.log('Not built yet...')}>Log in</button></p>
        <Link to="/">Go Home</Link>
      </form>
    </div>
  )
}

export default Login
