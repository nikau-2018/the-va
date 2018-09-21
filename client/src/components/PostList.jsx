import React from 'react'
import {connect} from 'react-redux'
import request from 'axios'

import Post from './Post'

/* CHANGE empty parameter to ({posts}) once reducer is hooked up */
class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    this.getPostList()
  }

  getPostList () {
    request
      .get('http://localhost:3001/api/v1/posts')
      .then(res => {
        this.setState({
          posts: res.data.posts
        })
      })
      /* eslint-disable no-console */
      .catch(console.error)
  }

  render () {
    return (
      <div>
        {console.log(this.state.posts)}
        {this.state.posts.map((post) =>
          <Post
            key={post.id}
            post={post}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps
)(PostList)
