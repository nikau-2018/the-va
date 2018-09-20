import React from 'react'

const Post = ({post}) => (
  <div>
    <h4>{post.title}</h4>
    <h6>{post.displayName}</h6>
    <p>{Date(post.date)}</p>
    <p>{post.body}</p>
  </div>
)

export default Post
