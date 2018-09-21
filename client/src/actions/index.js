import request from 'axios'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

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
      .get('http://localhost:3001/api/v1/posts')
      .then(res => {
        dispatch(receivePosts(res.data.posts))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
