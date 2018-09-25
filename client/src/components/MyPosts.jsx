import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchUserPosts} from '../actions'

import Post from './Post'
import BottomTabs from './BottomTabs'

class MyPosts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(fetchUserPosts())
  }

  render () {
    console.log('this.props.post is', this.props.post)
    return (
      <div className='myposts'>
        <h2>
          <span className='underline underlineTriangles'>
            My Posts
          </span>
        </h2>
        {this.props.posts.map((post) =>
          <Post
            key={post.id}
            post={post}
          />
        )}
        <Link to="/home">
          <button className='homeButton'>Home</button>
        </Link>
        <BottomTabs />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(MyPosts)
