// import {LOGOUT_SUCCESS} from './Logout/actions'
import {REGISTER_REQUEST, REGISTER_ERROR} from '../actions/register'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/login'
// import {isAuthenticated, getUserTokenInfo} from './utils/auth'

const initialState = {
  // isAuthenticated: isAuthenticated(),
  // user: getUserTokenInfo(),
  isLoggedIn: false,
  user: null,
  loginError: '',
  registerError: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        loginError: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginError: '',
        user: action.user
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        loginError: action.error
      }
    // case LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     isLoggedIn: false,
    //     user: null
    //   }
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        loginError: ''
      }
    case REGISTER_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        registerError: action.error
      }
    default:
      return state
  }
}
