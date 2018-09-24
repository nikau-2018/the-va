import React from 'react'
import {Link} from 'react-router-dom'

export default function Home (props) {
  return (
    <div className="home">
      <h1>Rules</h1>
      <p>Please read through the following rules and abide by them to ensure a safe community:</p>
      <ul>
        <li>Be patient</li>
        <li>Be kind</li>
        <li>Be respectful</li>
      </ul>
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
