import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from '../../actions/register'

export class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      registerSuccess: false
    }
  }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    // Register new user function.
    handleClick = () => {
      this.props.dispatch(registerUser(this.state.username, this.state.password))
    }

    render () {
      return (
        <div className='register-container'>
          <h1>
            Register for <br />
            The Vā
          </h1>
          <div className='form'>
          {this.props.isLoggedIn ? <Redirect to="/home"/> : null }
          {this.props.error}
            <p>
              Name:<br /><input type='text' name='username' autoComplete="off" onChange={this.handleChange} placeholder="Enter a username..." value={this.state.username} /><br />
              Password:<br /><input type='password' name='password' autoComplete="off" onChange={this.handleChange} placeholder="Enter a password..." value={this.state.password} /><br />
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.registerError
  }
}

export default connect(mapStateToProps)(Register)
