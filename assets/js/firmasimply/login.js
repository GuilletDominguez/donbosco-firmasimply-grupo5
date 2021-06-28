import Auth from './Modules/Auth/Auth.js';



const DASHBOARD_URL = '/index.html';

const btnLogin = document.getElementById('btn-session');
btnLogin.addEventListener('click', login, false);

const CODER = {
  email : correo, 
  password: contraseña
};
let correo = document.getElementById('exampleInputEmail1').value;
let contraseña = document.getElementById('exampleInputPassword1').value;
async function login() {

  await Auth.login(CODER);
  window.location.assign(DASHBOARD_URL);
 
}

  
  
  
