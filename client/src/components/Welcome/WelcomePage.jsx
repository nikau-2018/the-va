import React from 'react'
import {Link} from 'react-router-dom'

import leavesImage from '../../images/leaves.png'

export default function WelcomePage (props) {
  return (
    <div>
      <img className='welcomeleaves' src={leavesImage}/>
      <div className='welcomeToTheVa'>
        <span className='desktop-note'>Thanks for checking out the prototype version of The Vā!<br />At the moment we only have basic styling for the desktop view. We suggest you resize your browser or use a mobile phone.</span>
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
      </div>
    </div>
  )
}
