import Auth from './Modules/Auth/Auth.js';

const DASHBOARD_URL = '/index.html';

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', login, false);

async function login(e) {
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
  const CODER = {email: email, password: password};

  e.preventDefault()
  await Auth.login(CODER);
  window.location.assign(DASHBOARD_URL);
}