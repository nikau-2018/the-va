import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import LoginGreeting from '../LoginGreeting'

import {justLoggedIn} from '../../actions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.dismissLoginGreeting = this.dismissLoginGreeting.bind(this)
  }

  dismissLoginGreeting () {
    this.props.dispatch(justLoggedIn())
  }

  render () {
    const {justLoggedIn} = this.props
    return justLoggedIn
      ? <LoginGreeting dismissLoginGreeting={this.dismissLoginGreeting} />
      : <div className="home">
        <h1>Rules</h1>
        <p>Please read through the following rules and abide by them to ensure a safe community:</p>
        <ul>
          <li>Be patient</li>
          <li>Be kind</li>
          <li>Be respectful</li>
        </ul>
        <div className="bottom-tabs">
          <Link to="/myposts">
            Me
          </Link>
          <Link to="/list">
            Talanoa
          </Link>
          <Link to="/village">
            Village
          </Link>
        </div>
      </div>
  }
}

function mapStateToProps (state) {
  return {
    justLoggedIn: state.justLoggedIn
  }
}

export default connect(mapStateToProps)(Home)
