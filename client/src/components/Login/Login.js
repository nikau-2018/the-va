import request from 'axios'
import React from 'react'
import {Redirect} from 'react-router'
import {Link} from 'react-router-dom'

import {setToken} from '../../util/token'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginSuccess: false,
      loginError: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    request({
      method: 'post',
      url: '/api/v1/users/login',
      data: {
        username: this.state.username,
        password: this.state.password
      }})
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }

        this.setState({
          username: '',
          password: '',
          loginError: null,
          loginSuccess: true
        })
      })
      .catch(({response}) => this.setState({
        loginSuccess: false,
        loginError: response.data.error
      }))
  }

  render () {
    if (this.state.loginSuccess) {
      return (
        <Redirect to='/list' />
      )
    }

    return (
      <div className='login-container'>
        <h1>Log into The Vā</h1>
        <div className='form'>
          {this.state.loginError && <p>{this.state.loginError}</p>}
          <p>Name: <input type='text' name='username' onChange={this.handleChange} placeholder="Enter a username..." value={this.state.username} /></p>
          <p>Password: <input type='password' name='password' onChange={this.handleChange} placeholder="Enter a password..." value={this.state.password} /></p>
          <p><button onClick={this.handleClick}>Log in</button></p>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    )
  }
}
