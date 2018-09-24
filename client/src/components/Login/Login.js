import React from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/login'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
      // login: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    //   this.setState({
    //     login: !this.state.login
    //   })
    e.preventDefault()
    this.props.dispatch(loginUser(this.state.username, this.state.password))
  }

  render () {
    return (
      <div className='login-container'>
        <h1>
          Log into <br />
          The Vā
        </h1>
        <form>
          <p>Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter your username..." /></p>
          <p>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter your password..." /></p>
          <p><button onClick={this.handleSubmit}>Log in</button></p>
          <Link to="/">Go Home</Link>
        </form>
      </div>
    )
  }
}
