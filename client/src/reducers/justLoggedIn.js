import {JUST_LOGGED_IN} from '../actions/index'

function justLoggedIn (state = '', action) {
  switch (action.type) {
    case JUST_LOGGED_IN:
      return {
        justLoggedIn: true
      }

    default:
      return state
  }
}

export default justLoggedIn
