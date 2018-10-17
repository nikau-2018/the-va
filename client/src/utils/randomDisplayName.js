import request from 'axios'

export default function randomDisplayName () {
  return request
    .get('/api/v1/util/randomDisplayName')
    .then(res => {
      return res.data.displayName
    })
}
