export function getTokenFromLocalStorage() {
  return localStorage.getItem('access_token')
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem('access_token', token)
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem('access_token')
}

export function getLoginFromLocalStorage() {
  return localStorage.getItem('access_login')
}

export function setLoginToLocalStorage(login) {
  localStorage.setItem('access_login', login)
}

export function removeLoginFromLocalStorage() {
  localStorage.removeItem('access_login')
}
