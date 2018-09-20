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
            <div className='container'>
                <form>
                    <p>Name: <input name='name' onChange={this.handleChange} /></p>
                    <p>Password: <input name='password' onChange={this.handleChange} /></p>
                    <p><Button onClick={this.handleClick}>Add user</Button></p>
                    <Link to="/">Go Home</Link>
                </form>
            </div>

        )
    }
}

export default Register
