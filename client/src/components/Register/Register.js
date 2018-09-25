import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import request from 'axios'

export class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      registerSuccess: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    // Register new user function.
    handleClick = () => {
      // Configure Axios to perform the POST request.
      request({

        // Set HTTP request type.
        method: 'post',

        // Set endpoint.
        url: '/api/v1/users/register',

        // Set POST data to be stored in DB.
        data: {
          username: this.state.username,
          password: this.state.password
        },

        // Set the HTTP header content type.
        headers: {
          'Content-Type': 'application/json'
        }
      })

        // Handle success response.
        .then(res => {
          if (res.status === 200) {
            this.setState({
              registerSuccess: true
            })
          }
        })

        // Handle errors.
        .catch(err => console.error(err))
    }

    render () {
      return (
        <div className='register-container'>
          <h1>
            Register for <br />
            The Vā
          </h1>
          <div className='form'>
            <p>
              Name:<br /><input type='text' name='username' onChange={this.handleChange} placeholder="Enter a username..." value={this.state.username} /><br />
              Password:<br /><input type='password' name='password' onChange={this.handleChange} placeholder="Enter a password..." value={this.state.password} /><br />
              Confirm password:<br /><input type='password' name='confirmPassword' onChange={this.handleChange} placeholder="Re-enter password..." value={this.state.confirmPassword} />
            </p>
            <button onClick={this.handleClick}>Register</button>
            { this.state.registerSuccess && <Redirect to='/home' /> }
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        </div>
      )
    }
}

export default Register
