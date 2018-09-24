import React from 'react'
import {Link} from 'react-router-dom'

const LoginGreeting = () => (
  <div className='login-greeting'>
    <h6>
      Bula and welcome to The Vā!
    </h6>
    <p>
      We hope that this community becomes a safe space for you to express yourself and navigate the complex place that is Vā.
    </p>
    <p>
      Vā is the space between, not empty space, not space that separates but space that relates and holds separate things together.
    </p>
    <Link to="/home">
      <button>Continue</button>
    </Link>
  </div>
)

export default LoginGreeting
