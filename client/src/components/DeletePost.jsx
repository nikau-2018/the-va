import React from 'react'
import request from 'axios'
import {Redirect} from 'react-router-dom'

export default class DeletePost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deleted: false,
      back: false
    }
  }

  deletePost () {
    request
      .delete(`/api/v1/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          deleted: true
        })
      })
      .catch(console.error)
  }

  handleDelete = () => {
    this.deletePost()
  }

  handleBack = () => {
    this.setState({
      back: true
    })
  }

  render () {
    return (
      <div>
        <h1>Are you sure you want to delete this post?</h1>
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleDelete}>delete</button>
        {this.state.deleted && <Redirect to = '/list'/>}
        {this.state.back && <Redirect to = {`/postDetail/${this.props.match.params.id}`}/>}
      </div>

    )
  }
}
