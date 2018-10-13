import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPosts, fetchReplies} from '../actions'
import request from 'axios'
import randomDisplayName from '../utils/randomDisplayName'

import {getHeaders} from '../util/api'
import BottomTabs from './BottomTabs/BottomTabs'

class PostDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayName: '',
      replyText: ''
    }
  }

  componentDidMount () {
    this.props.dispatch(fetchPosts())
    this.props.dispatch(fetchReplies(this.props.match.params.id))
    this.randomName()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  randomName = () => {
    randomDisplayName()
      .then(name => this.setState({displayName: name}))
  }

  handleSubmit = () => {
    const replyData = {
      replyData: {
        postId: this.props.match.params.id, 
        userId: 1000,
        displayName: this.state.displayName,
        text: this.state.replyText
      }
    }

    request.post('/api/v1/posts/reply', replyData, { headers: getHeaders() })
      .then(() => {
        this.props.dispatch(fetchReplies(this.props.match.params.id))
      })
  }

  render () {
    return (
      <div className='post-detail'>
        <div id='post-detail'>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <p>{this.props.post.displayName}</p>
          <Link to ={`deletePost/${this.props.post.id}`}>
            <button onClick={this.handleClick}>delete post</button>
          </Link>
          <Link to="/list">
            <button>Back</button>
          </Link>
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
        <div id="reply-box">
          <h3>Add a reply:</h3>
          <p>Posting as: {this.state.displayName} <span onClick={this.randomName}>🔄</span></p>
          <textarea name='replyText' onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <BottomTabs />                
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const [post] = state.posts.filter(post => {
    return post.id == props.match.params.id
  })
  const replies = state.replies
  return {
    post,
    replies
  }
}

export default connect(mapStateToProps)(PostDetail)
