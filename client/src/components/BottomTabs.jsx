import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => (
  <div className='bottom-tabs'>
    <Link className='meTab' to="/myposts">
    Me
    </Link>
    <Link className='talanoaTab'to="/list">
    Talanoa
    </Link>
    <Link className='villageTab'to="/village">
    Village
    </Link>
  </div>
)

export default Post
