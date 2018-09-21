import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function MainProfile (props) {
  return (
    <div className='container'>
      <h1>Here is some simmple rules before you want to use it::</h1>
      <Link to="/village">
        <Button>village</Button>
      </Link>
      <Link to="/mypost">
        <Button>My posts</Button>
      </Link>
    </div>
  )
}
