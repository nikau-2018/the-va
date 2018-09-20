import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => (
  <div>
    <Link to={`/post/${post.id}`}>
      <h4>{post.title}</h4>
    </Link>
    <h6>{post.displayName}</h6>
    <p>{new Date(post.date).toString()}</p>
  </div>
)

export default Post
