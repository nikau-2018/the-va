// the post-detail branch has the same component CreatePost.jsx, delete and use this file

import React from 'react'

class CreatePost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      submit: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // this handleClick will send a post request to our /api/v1/. this needs to be added to the function
  handleClick (e) {
    this.setState({
      submit: {
        title: this.state.title,
        body: this.state.body
      }
    })
  }

  render () {
    return (
      <div>
        <h2>Create a Post</h2>
        <textarea placeholder="Enter your title here..." name="title" value={this.state.title} onChange={this.handleChange} /><br />
        <textarea placeholder="Enter your post here..." name="body" value={this.state.body} onChange={this.handleChange}/><br />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default CreatePost
