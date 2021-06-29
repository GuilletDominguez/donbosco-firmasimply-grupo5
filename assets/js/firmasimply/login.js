import Auth from './Modules/Auth/Auth.js';

const DASHBOARD_URL = '/index.html';


const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', login, false);

const btnLogin = document.querySelector('#form');
btnLogin.addEventListener('submit', login, false);

let mensajeError = document.getElementById('mensaje');
async function login(e) {
  e.preventDefault()

let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
  const CODER = {email: email, password: password};
  if(email == '' || password == ''){
    mensajeError.innerHTML = `<div class="alert alert-danger" role="alert"> Introduzca un
    Email y/o Contraseña correcto!

  </div>`
  setTimeout(
    function(){
      mensajeError.innerHTML = ''},3000)

}else{
  mensajeError.innerHTML = `<div class="alert alert-success" role="alert">
  Has iniciado sesión con éxito espere!
  </div>`

  setTimeout(
    function(){
      mensajeError.innerHTML = ''},3000)
  }

  await Auth.login(CODER);

  setTimeout(
    function(){window.location.assign(DASHBOARD_URL)},3000)

  </div>`}
  else{
  mensajeError.innerHTML = `<div class="alert alert-success" role="alert">
  Has iniciado sesión con éxito espere!
  </div>`
  }

 
  await Auth.login(CODER);
  window.location.assign(DASHBOARD_URL);
}