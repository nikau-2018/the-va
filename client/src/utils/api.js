import { getToken } from './token'

export function getHeaders () {
  const token = getToken()
  console.log(token)
  if (token) {
    return {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  }
}
