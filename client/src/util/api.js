import {getToken} from './token'

export function getHeaders () {
  const token = getToken()
  if (token) {
    return {
      'Authorization': `Bearer ${token}`
    }
  }

  return {}
}
