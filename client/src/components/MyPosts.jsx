import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPosts, fetchReplies} from '../actions'

class MyPosts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const userId = 1001
    this.props.dispatch(fetchPosts(userId))
    this.props.dispatch(fetchReplies(userId))
  }

  render () {
    return (
      <div className='myposts'>
        <div id='post-detail'>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <p>{this.props.post.displayName}</p>
          <Link to ={`deletePost/${this.props.post.id}`}><button onClick={this.handleClick}>delete post</button></Link>
        </div>
        <div id='replies'>
          {this.props.replies.map(reply => {
            return (
              <div key={reply.id} className='reply'><br />
                <div><strong>{reply.displayName}</strong></div><br />
                {reply.text}
                <div> upvotes: {reply.upvotes} downvotes: {reply.downvotes}</div><br />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const [post] = state.posts.filter(post => {
    return post.id !== props.match.params.id
  })
  const replies = state.replies
  return {
    post,
    replies
  }
}

export default connect(mapStateToProps)(MyPosts)
