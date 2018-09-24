import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => (
  <div className='post'>
    <Link to={`/postDetail/${post.id}`}>
      <div>{post.title}</div>
    </Link>
    <div>By: {post.displayName}</div>
    <div>Posted: {new Date(post.createdAt).toString()}</div>
  </div>
)

export default Post
