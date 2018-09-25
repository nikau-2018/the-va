import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import WelcomePage from './components/Welcome/WelcomePage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import PostDetail from './components/PostDetail'
import DeletePost from './components/DeletePost'

import Home from './components/Home/Home'
import PostList from './components/PostList'
import Village from './components/Village/Village'
import MyPosts from './components/MyPosts'
import CheekySkip from './components/CheekySkip'

import CreatePostMain from './components/CreatePostMain'

import leavesImage from './images/leaves.png'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='border'>
          <img className='appleaves' src={leavesImage}/>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/list' component={PostList} />
          <Route path='/create' component={CreatePostMain} />
          <Route path='/home' component={Home} />
          <Route path='/village' component={Village} />
          <Route path='/myposts' component={MyPosts} />
          <Route exact path='/postDetail/:id' component={PostDetail} />
          <Route exact path='/postDetail/deletePost/:id' component={DeletePost} />
          <Route path='/cheekySkip' component={CheekySkip} />
        </div>
      </Router>
    )
  }
}

export default App
