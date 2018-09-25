import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => (
  <div className='bottom-tabs'>
    <Link to="/myposts">
    Me
    </Link>
    <Link to="/list">
    Talanoa
    </Link>
    <Link to="/village">
    Village
    </Link>
  </div>
)

export default Post
