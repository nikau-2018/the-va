import request from 'axios'

import {getHeaders} from '../util/api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_REPLIES = 'RECEIVE_REPLIES'
export const REQUEST_REPLIES = 'REQUEST_REPLIES'
export const JUST_LOGGED_IN = 'JUST_LOGGED_IN'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  }
}

export const requestReplies = () => {
  return {
    type: REQUEST_REPLIES
  }
}

export const receiveReplies = (replies) => {
  return {
    type: RECEIVE_REPLIES,
    replies: replies
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts () {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get('http://localhost:3001/api/v1/posts', {headers: getHeaders()})
      .then(res => {
        dispatch(receivePosts(res.data.posts))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchReplies (id) {
  return (dispatch) => {
    dispatch(requestReplies())
    return request
      .get(`http://localhost:3001/api/v1/posts/${id}`, {headers: getHeaders()})
      .then(res => {
        dispatch(receiveReplies(res.data.replies))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

// WORK IN PROGRESS - ALISA
export function fetchUserPosts () {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get('http://localhost:3001/api/v1/posts/user')
      .then(res => {
        dispatch(receivePosts(res.data.posts))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const justLoggedIn = () => {
  return {
    type: JUST_LOGGED_IN
  }
}
