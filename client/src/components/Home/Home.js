import React from 'react'
import { Link } from 'react-router-dom'

export default function Home (props) {
  return (
    <div className='container'>
      <h1>Here is some simmple rules before you want to use it::</h1>
      <Link to="/village">
        <button>village</button>
      </Link>
      <Link to="/mypost">
        <button>My posts</button>
      </Link>
    </div>
  )
}
