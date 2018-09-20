import React, { Component } from 'react'
import request from 'axios'
import { HashRouter as Router, Route } from 'react-router-dom'

import './App.css'

import WelcomePage from './components/Welcome/WelcomePage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

import MainProfile from './components/Home/MainProfile'
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
      <Router>
        <div>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/list' component={PostList} />
          <Route path='/home' component={MainProfile} />
        </div>
      </Router>
    )
  }
}

export default App
