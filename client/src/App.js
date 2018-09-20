import React, { Component } from 'react'
import request from 'axios'
import { HashRouter as Router, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import './App.css'

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
        <Route exact path='/' component={Welcome} />
        <Route path='/login/' component={SignIn} />
        <Route path='/register' component={register} />

          </div>
      </Router>
    )
  }
}

export default App
