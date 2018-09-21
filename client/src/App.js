import React, { Component } from 'react'
// import request from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import WelcomePage from './components/Welcome/WelcomePage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

import MainProfile from './components/Home/MainProfile'
import PostList from './components/PostList'
import Village from './components/Village.js'
import MyPost from './components/MyPost'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/list' component={PostList} />
          <Route path='/home' component={MainProfile} />
          <Route path='/village' component={Village} />
          <Route path='/mypost' component={MyPost} />
        </div>
      </Router>
    )
  }
}

export default App
