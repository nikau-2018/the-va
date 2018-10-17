import request from 'axios'

import {setToken} from '../utils/token'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
})

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginError = error => ({
  type: LOGIN_ERROR,
  error
})

export const loginUser = (username, password) => {
  return dispatch => {
    dispatch(loginRequest())
    return request
      .post(`/api/v1/users/login`, {username, password})
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }
        dispatch(loginSuccess(res.data.user))
      })
      .catch(({response}) => dispatch(loginError(response.data.error)))
  }
}
