export function setToken (token) {
    localStorage.setItem('_VA_JWT', token)
}
export function getToken () {
    return localStorage.getItem('_VA_JWT')
}