const LOGIN_URL = 'index.html';
const DASHBOARD_URL = 'assets/registroAsistencia.html';

window.onload = event => {
  let currentPath = window.location.pathname;
  if(localStorage.getItem('token') != null){
    if(currentPath == 'index.html') {
      window.location.assign(DASHBOARD_URL);
    }
  } else {
    if(currentPath != 'index.html') {
      window.location.assign(LOGIN_URL);
    }
  }
};
