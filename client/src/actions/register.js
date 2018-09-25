import request from 'axios'
import {dispatch} from '../../../node_modules/rxjs/internal/observable/pairs'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const requestRegister = () => {
  return {
    type: REGISTER_REQUEST
  }
}

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user: user
  }
}

export const registerError = (errMes) => {
  return {
    type: REGISTER_ERROR,
    errMes: errMes
  }
}

export function fetchRegister () {
  return (dispatch) => {
    dispatch(requestRegister())
    return request
      .get('http://localhost:3001/api/users/register')
      .then(res => {
        dispatch(registerSuccess(res.data.users))
      })
      .catch(err => {
        dispatch(registerError(err.message))
      })
  }
}
