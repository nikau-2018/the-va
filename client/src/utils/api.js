import { creatToken } from './token'

export function getHeaders () {
  const token = creatToken()
  if (token) {
    return {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  }

  return {}
}