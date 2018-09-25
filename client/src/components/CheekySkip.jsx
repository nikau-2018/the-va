import React from 'react'
import { Link } from 'react-router-dom'

import BottomTabs from './BottomTabs/BottomTabs'

export default function CheekySkip (props) {
  return (
    <div className='cheekySkip'>
      <h1>Here's where the real magic happens...</h1>
      <Link to="/list">
        <button>See posts</button>
      </Link>
      <Link to="/create">
        <button>Create new post</button>
      </Link>
      <BottomTabs />
    </div>
  )
}
