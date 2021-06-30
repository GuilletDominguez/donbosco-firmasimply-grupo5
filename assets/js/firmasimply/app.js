const LOGIN_URL = '/login.html';
const DASHBOARD_URL = '/index.html';

window.onload = event => {
  let currentPath = window.location.pathname;
  if(localStorage.getItem('token') != null){
    if(currentPath == '/login.html') {
      window.location.assign(DASHBOARD_URL);
    }
  } else {
    if(currentPath != '/login.html') {
      window.location.assign(LOGIN_URL);
    }
  }
};
