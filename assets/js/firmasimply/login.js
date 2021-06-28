import Auth from './Modules/Auth/Auth.js';
let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')
const DASHBOARD_URL = 'assets/registroAsistencia.html';
const CODER = {email: email, password: password};

const btnLogin = document.getElementById('btn-session');
btnLogin.addEventListener('click', login, false);

async function login() {
  if(status===200)
  await Auth.login(CODER);
 
  window.location.assign(DASHBOARD_URL);
  }
  
