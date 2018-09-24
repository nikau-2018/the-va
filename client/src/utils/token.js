export function setToken (token) {
    localStorage.setItem('_VA_JWT', token)
}
export function creatToken () {
    return localStorage.getItem('_VA_JWT')
}