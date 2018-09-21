import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'

import Post from './Post'

class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  UNSAFE_componentWillMount () {
    this.props.dispatch(fetchPosts())
  }

  render () {
    return (
      <div className='talanoa'>
        <h2><span className='underline underlineTriangles'>Talanoa</span></h2>
        {console.log(this.state.posts)}
        {this.props.posts.map((post) =>
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

export default connect(mapStateToProps)(PostList)
