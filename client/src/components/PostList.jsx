import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

/* CHANGE empty parameter to ({posts}) once reducer is hooked up */
const PostList = () => {
  const posts = [
    {
      title: 'Hello world',
      username: 'AnonymousAlisaEmma',
      body: 'I would like advice on this topic that is confusing me.',
      date: 1537399535,
      id: 10001
    },
    {
      title: 'Making new friends',
      username: 'CuriousCapybara',
      body: 'I am experiencing issues with my mental health right now and need advice on how to make friends as an adult.',
      date: 1537399521,
      id: 10002
    },
    {
      title: 'Being true to myself',
      username: 'HappyHippo',
      body: 'My family is not accepting me for who I am. Any advice?',
      date: 1537397735,
      id: 10003
    }
  ]
  return (
    <div>
      {posts.map((post) =>
        <Post
          key={post.id}
          post={post}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps
)(PostList)
