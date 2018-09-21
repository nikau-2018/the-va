import React from 'react'
// import {connect} from 'react-redux'
import request from 'axios'

/* CHANGE empty parameter to ({posts}) once reducer is hooked up */
class PostDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {},
      replies: []
    }
  }

  componentDidMount () {
    this.getPostFromStore()
    this.getReplies()
  }

  getPostFromStore () {
    // TODO get post from redux store
    this.setState({post: {
      id: this.props.match.params.id
    }
    })
    this.getReplies()
  }

  // TODO change api string to get post.id from state. requires
  getReplies () {
    request
      .get(`http://localhost:3001/api/v1/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          replies: res.data.replies
        })
      })
      /* eslint-disable no-console */
      .catch(console.error)
  }

  render () {
    return (
      <div>
        <div id='post-detail'>
          <h1>{this.state.post.id}</h1>
        </div>
        <div id='replies'>
          {this.state.replies.map(reply => {
            console.log(reply)
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

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }

// export default connect(
//   mapStateToProps
// )(PostList)

export default PostDetail
