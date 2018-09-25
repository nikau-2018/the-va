import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchPosts} from '../../actions'
import styles from './styles.css'

import Post from '../Post'
import BottomTabs from '../BottomTabs/BottomTabs'

class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(fetchPosts())
  }

  render () {
    return (
      <div className='talanoa postList'>
        <h2>
          <span className='underline underlineTriangles'>
            Talanoa
          </span>
        </h2>
        {this.props.posts.map((post) =>
          <Post
            key={post.id}
            post={post}
          />
        )}
        <Link to="/create">
          <button className='createButton'>Add A New Post</button>
        </Link>
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

export default connect(mapStateToProps)(PostList)
