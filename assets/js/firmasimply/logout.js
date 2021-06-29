import Auth from './Modules/Auth/Auth.js';

if(document.querySelector('#logout') != null) {
  const btnLogout = document.querySelector('#logout');
  btnLogout.addEventListener('click', logout, false);
}

async function logout() {
  await Auth.logout();
  window.location.assign("http://127.0.0.1:5500/login.html");
}