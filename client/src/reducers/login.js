import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR } from '../actions/login'

    const defaultState = {
        error: null,
        pending: false,
        user: null
    }

export default function loginReducers (state = defaultState, { action, error, type, user }) {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                pending: true

            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                pending: false,
                user
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error,
                pending: false,
                user: null
            }
            default:
            return state
      
        }
    }