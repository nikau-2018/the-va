import request from 'axios'
import { dispatch } from 'rxjs/internal/observable/pairs'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerUser = () => {
  return {
    type: REGISTER_REQUEST
  }
}

export const getUser = (user) => {
  console.log(user)
  return {
    type: REGISTER_SUCCESS,
    user: user
  }
}

export const showError = (errorMessage) => {
  return {
    type: REGISTER_ERROR,
    errorMessage: errorMessage
  }
}

export function creatUser() {
  return (dispatch) => {
    dispatch(registerUser())
    return request
      .post('http://localhost:3001/api/v1/users/register')
      .then(res => {
        dispatch(getUser(res.data.user))
      })
      .catch(err => {
        dispatch(showError(err.message))
      }
  }
}
