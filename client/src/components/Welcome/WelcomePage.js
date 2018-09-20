
import React from 'react'
import { Link } from 'react-router-dom'
import {  Link  } from 'semantic-ui-react'

export function Home (props) {
  return (
    <div className='container'>
      <h1>Welcome to Va</h1>
      <Link to="/login">
        <Button>Log in</Button>
      </Link>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </div>
  )
}