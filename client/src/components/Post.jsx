import React from 'react'
import {Link} from 'react-router-dom'
const moment = require('moment')

const Post = ({post}) => (
  <div className='post'>
    <Link to={`/postDetail/${post.id}`}>
      <p>{post.title}</p>
    </Link>
    
    <p>
      By: {post.displayName}<br/>
      <span className="fromDate">Posted: { moment(post.createdAt).fromNow() }</span>
    </p>
  </div>
)

export default Post
