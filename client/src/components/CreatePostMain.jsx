// the post-detail branch has the same component CreatePost.jsx, delete and use this file

import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router'

class CreatePost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayName: '',
      title: '',
      body: '',
      done: false
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
    const postData = {
      postData: {
        userId: 1000,
        displayName: this.state.displayName,
        title: this.state.title,
        body: this.state.body
      }
    }

    axios.post('http://localhost:3001/api/v1/posts/', postData)
      .then(response => {
        this.setState({done: true})
      })
  }

  render () {
    return (
      <div className='createPost'>
        <h2>Create a Post</h2>
        <textarea placeholder="Enter your title here..." name="title" value={this.state.title} onChange={this.handleChange} /><br />
        <textarea placeholder="Display Name" name="displayName" value={this.state.displayName} onChange={this.handleChange} /><br />
        <textarea placeholder="Enter your post here..." name="body" value={this.state.body} onChange={this.handleChange}/><br />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.done && <Redirect to="/list"/>}
      </div>
    )
  }
}

export default CreatePost
