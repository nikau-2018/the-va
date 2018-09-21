import React, {Component} from 'react'
// import request from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import WelcomePage from './components/Welcome/WelcomePage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import PostDetail from './components/PostDetail'

import Home from './components/Home/Home'
import PostList from './components/PostList'
import Village from './components/Village/Village'
import MyPost from './components/MyPost'
import CheekySkip from './components/CheekySkip'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/list' component={PostList} />
          <Route path='/home' component={Home} />
          <Route path='/village' component={Village} />
          <Route path='/mypost' component={MyPost} />
          <Route exact path='/postDetail/:id' component={PostDetail} />
          <Route path='/cheekySkip' component={CheekySkip} />
        </div>
      </Router>
    )
  }
}

export default App
