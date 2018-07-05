export function getTokenFromLocalStorage() {
  return localStorage.getItem('access_token');
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem('access_token', token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem('access_token');
}
