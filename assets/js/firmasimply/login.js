import Auth from './Modules/Auth/Auth.js';
const DASHBOARD_URL = '/index.html';

const btnLogin = document.querySelector('#form');
btnLogin.addEventListener('submit', login, false);

let mensajeError = document.getElementById('mensaje');
async function login(e) {
  e.preventDefault()
await comprobarEmail()
}
 const coderList = [
    {
      email : 'joaquin@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'javier@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'manuel.igor@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'moisis@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'jose.manuel@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'antonio@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'jimena@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'roberto.carlos@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'daniel@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'manuel.francisco@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'oscar@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'jose.enrique@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'maria@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'aurora@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'guillermo@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'ruben@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'matias@firmasimply.com' ,
      password: 'password'
    },
    {
      email : 'mohamed@firmasimply.com' ,
      password: 'password'
    }
  
  ]

  function comprobarEmail(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
      const CODER = {email: email, password: password};
    for( let i=0; i < coderList.length; i++){
      if(CODER.email === coderList[i].email && CODER.password === coderList[i].password){
        return exito(CODER)
      }
      else if(email == '' || password == ''){
        console.log(coderList[i].email)
        console.log(CODER.email)
        mensajeError.innerHTML = `<div class="alert alert-danger" role="alert"> Introduzca datos de 
        Email y/o Contraseña correcto!
    
      </div>`
      setTimeout(
        function(){
          mensajeError.innerHTML = ''},3000)
    
    }
      else if(email != coderList[i].email || password != coderList[i].password){
        
        mensajeError.innerHTML = `<div class="alert alert-danger" role="alert"> 
        Email y/o Contraseña incorrecta
      
      </div>`
     
      setTimeout(
        function(){
          mensajeError.innerHTML = ''},3000)
      }
    
    }
  }


  function exito(CODER){
    mensajeError.innerHTML = `<div class="alert alert-success" role="alert">
        Has iniciado sesión con éxito espere!
        </div>`
      
        setTimeout(
          function(){
            mensajeError.innerHTML = ''},3000)
            Auth.login(CODER);
      
            setTimeout(
              function(){window.location.assign(DASHBOARD_URL)},3000)
      }
  