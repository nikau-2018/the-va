// the post-detail branch has the same component CreatePost.jsx, delete and use this file

import React from 'react'
import request from 'axios'
import {Redirect} from 'react-router'
import randomDisplayName from '../utils/randomDisplayName'

import {getHeaders} from '../util/api'

import BottomTabs from './BottomTabs/BottomTabs'

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
    this.getRandomDisplayName()
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getRandomDisplayName () {
    randomDisplayName()
      .then(name => this.setState({displayName: name}))
  }

  handleClick (e) {
    const postData = {
      postData: {
        userId: 1000,
        displayName: this.state.displayName,
        title: this.state.title,
        body: this.state.body
      }
    }

    request.post('/api/v1/posts/', postData, {headers: getHeaders()})
      .then(response => {
        this.setState({done: true})
      })
  }

  render () {
    return (
      <div className='createPost'>
        <h2>Create a Post</h2>
        <input placeholder="Enter your title here..." name="title" value={this.state.title} onChange={this.handleChange} /><br />
        <p>Posting as: {this.state.displayName}</p><br />
        <textarea placeholder="Enter your post here..." name="body" value={this.state.body} onChange={this.handleChange}/><br />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.done && <Redirect to="/list"/>}
        <BottomTabs />
      </div>
    )
  }
}

export default CreatePost
