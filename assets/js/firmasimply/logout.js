import Auth from './Modules/Auth/Auth.js';

if(document.querySelector('#confirmar') != null) {
  const btnLogout = document.querySelector('#confirmar');
  btnLogout.addEventListener('click', logout, false);
}

async function logout() {
  await Auth.logout();
  window.location.assign("/index.html");
}