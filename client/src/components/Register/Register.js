import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export class Register extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        country: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        api.addUser(this.state)
            .then(this.props.updateUserList)
    }
    render() {
        return (
            <div className='register-container'>
                <h1>Register for The Vā</h1>
                <form>
                    <p>Name: <input name='username' onChange={this.handleChange} placeholder="Enter a username..." /></p>
                    <p>Password: <input name='password' onChange={this.handleChange} placeholder="Enter a password..." /></p>
                    <p>Confirm password: <input name='confirm-password' onChange={this.handleChange} placeholder="Re-enter password..." /></p>
                    <p><Button onClick={this.handleClick}>Register</Button></p>
                    <Link to="/">Go Home</Link>
                </form>
            </div>

        )
    }
}

export default Register
