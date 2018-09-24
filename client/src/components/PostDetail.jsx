import React from 'react'
import {connect} from 'react-redux'
import request from 'axios'
import {Redirect} from 'react-router-dom'

class PostDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      replies: [],
      deleted: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  componentDidMount () {
    this.getReplies()
  }

  getReplies () {
    request
      .get(`/api/v1/posts/${this.props.post.id}`)
      .then(res => {
        this.setState({
          replies: res.data.replies
        })
      })
    /* eslint-disable no-console */
      .catch(console.error)
  }

  handleClick () {
    const postId = this.props.post.id
    this.setState({
      delete: true
    })
  }

  render () {
    if (this.state.delete) {
      return (
        <Redirect to = ``/>
      )
    }
    return (
      <div>
        <div id='post-detail'>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <p>{this.props.post.displayName}</p>
          <button onClick={this.handleClick}>delete post</button>
        </div>
        <div id='replies'>
          {this.state.replies.map(reply => {
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
  return {
    post
  }
}

export default connect(mapStateToProps)(PostDetail)
