import React, { Component } from 'react'
import request from 'superagent'

import banner from './Pac-Hack_Banner.jpg'
import './App.css'

class App extends Component {
  componentDidMount () {
    // Sample API request, remove this!
    request
      .get('/api/v1/users')
      .end((err, res) => {
        if (err) {
          console.error('NOPE.')
        }

        console.log('Yup, API on 3001 sent:', res.body)
      })
  }

  render () {
    return (
      <header className="App-header">
        <img src={banner} className="App-logo" alt="banner" />
      </header>
    )
  }
}

export default App
