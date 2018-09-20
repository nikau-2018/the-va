import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
    return (
      <div className='container'>
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <Link to="/">Go Home</Link>
          <Link to="/main">Lets go in!</Link>
        </form>
      </div>
    )
}
  
export default Login
