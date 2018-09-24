import {JUST_LOGGED_IN} from '../actions'

function justLoggedIn (state = true, action) {
  switch (action.type) {
    case JUST_LOGGED_IN:
      return false

    default:
      return state
  }
}

export default justLoggedIn
