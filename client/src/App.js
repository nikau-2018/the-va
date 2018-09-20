import React, { Component } from 'react'
import request from 'axios'
import { HashRouter as Router, Route } from 'react-router-dom'
import WelcomePage from './components/Welcome/WelcomePage'
import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

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

  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />

          </div>
      </Router>
    )
  }
}

export default App
