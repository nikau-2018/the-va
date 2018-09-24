import React from 'react'
import {Link} from 'react-router-dom'
const moment = require('moment')

const Post = ({post}) => (
  <div className='post'>
    <Link to={`/postDetail/${post.id}`}>
      <div>{post.title}</div>
    </Link>
    <div>By: {post.displayName}</div>
    {/* <div>Posted: {new Date(post.createdAt).toString()}</div> */}
    <p>Posted: { moment(post.createdAt).fromNow() }</p>
  </div>
)

export default Post
