import React, { Component } from 'react'
import request from 'axios'

import PostList from './components/PostList'

class App extends Component {
  componentDidMount () {
    // Sample API request, remove this!
    request
      .get('/api/v1/users')
      .then(res => {
        console.log('Yup, API on 3001 sent:', res.data, 'with status', res.status)
      })
      .catch(console.error)
  }

  render () {
    return (
      <div>
        <PostList />
      </div>
    )
  }
}

export default App
