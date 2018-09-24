import request from 'axios'
import { dispatch } from '../../../node_modules/rxjs/internal/observable/pairs';

import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginPending = () => ({ type: LOGIN_REQUEST })

export const loginSuc = user => ({
    type: LOGIN_SUCCESS,
    user
})

export const loginReq = ({
    type: LOGIN_REQUEST
   
})

export const loginUser = (username, password) => {
    return dispatch => {
        //dispatch(loginReq())
        return request
<<<<<<< HEAD
        .post('/api/v1/users/login', {username, password}, getHeaders())
=======
        .post(`/api/v1/users/login`, {username, password}, getHeaders())
>>>>>>> 015081195595347fdc10248e4639855fa6653b18
        .then(res => {
          if (res.data.token) {
            setToken(res.data.token)
          }
  
<<<<<<< HEAD
          dispatch(login(res.data.user))
=======
          dispatch(loginSuc(res.data.user))
>>>>>>> 015081195595347fdc10248e4639855fa6653b18
        })
        .catch(({response}) => dispatch(loginError(response.data.error)))
    }
}

export const loginError = error => ({
    type: LOGIN_ERROR,
    error
<<<<<<< HEAD
  })
=======
  })
>>>>>>> 015081195595347fdc10248e4639855fa6653b18
