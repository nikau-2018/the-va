import React from 'react'
import {Link} from 'react-router-dom'

import leavesImage from '../../images/leaves.png'

export default function WelcomePage (props) {
  return (
    <div>
      <img className='welcomeleaves' src={leavesImage}/>
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
        <br />
        <br />
        <Link to="/cheekySkip">
          <button>Skip...</button>
        </Link>
      </div>
    </div>
  )
}
