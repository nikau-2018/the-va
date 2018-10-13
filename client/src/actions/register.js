import request from 'axios'

import {setToken} from '../utils/token'
import {loginSuccess} from '../actions/login'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const requestRegister = () => {
  return {
    type: REGISTER_REQUEST
  }
}

export const registerError = (error) => {
  return {
    type: REGISTER_ERROR,
    error
  }
}

export function registerUser (username, password) {
  return (dispatch) => {
    dispatch(requestRegister())
    return request
      .post(`/api/v1/users/register`, {username, password})
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }
        dispatch(loginSuccess(res.data.user))
      })
      .catch(({response}) => dispatch(registerError(response.data.message)))
  }
}
