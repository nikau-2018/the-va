import React from 'react'
import { Link } from 'react-router-dom'

const Village = (props) => {
  return (
    <div className='village'>
      <h1> Helo dear User here is some useful links for you </h1>
      <a href='https://www.google.com'> Put some useful staff here </a>
      <a href='https://www.google.com'> here too</a>
      <a href='https://www.google.com'> and dont forget put here as well </a>
      <Link to="/main">Return to main</Link>
    </div>
  )
}

export default Village
