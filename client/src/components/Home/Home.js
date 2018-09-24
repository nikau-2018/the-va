import React from 'react'
import {Link} from 'react-router-dom'

import LoginGreeting from '../LoginGreeting'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      justLoggedIn: false
    }
  }

  // onClick

  render () {
    return (
      <div className="home">
        <h1>Rules</h1>
        <p>Please read through the following rules and abide by them to ensure a safe community:</p>
        <ul>
          <li>Be patient</li>
          <li>Be kind</li>
          <li>Be respectful</li>
        </ul>
        <LoginGreeting />
        <div className="bottom-tabs">
          <Link to="/myposts">
            <button>Me</button>
          </Link>
          <Link to="/list">
            <button>Talanoa</button>
          </Link>
          <Link to="/village">
            <button>Village</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
