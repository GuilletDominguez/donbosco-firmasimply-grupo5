import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';

//Informacion Dinámica del usuario logueado
let infoCoder = Auth.getCoder()
let emailUser = document.getElementById('usuario');
if(emailUser != null){
emailUser.innerHTML = infoCoder.name;
}
// ------------------------------------------------------------------------------------------------------Funcionalidad de Firmar
async function getListadoFirmas() {
    let respuesta = await Asistencia.getlistadoFirmas();
    console.log(respuesta);
    // Tu Código

    
}

// Captura de botón entrada en HTML y escucha click
let btnEntrada = document.getElementById("entrada");
btnEntrada.addEventListener("click",grabarEntrada,false)

// Captura de botón salida en HTML y escucha click
let btnSalida = document.getElementById("salida");
btnSalida.addEventListener("click",grabarSalida,false)



//------------------------------------------------------------- Funcionalidad de Firmar Entrada
async function grabarEntrada(e){
    e.preventDefault()

//Captura de nota adjunta
let nota = document.getElementById("notaAdjunta").value;
let checknota = document.getElementById("check");
let alerta = document.getElementById('notaMsg');

if(checknota.checked == true  && nota == ''){
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor introduzca una nota
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000
  )
}
else if(checknota.checked == false && nota !==''){

    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor confirme que quiere añadir la nota
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);
  
}
else if(checknota.checked == true && nota !== ''){
    nota = nota
    let firmaEntrada = {
        user_id: infoCoder.id,
        nota: nota,
        // 1 para entrada, 0 para salida
        estado: 1 }
    await Asistencia.firmar(firmaEntrada)
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su nota se ha añadido  y se ha registrado su entrada con éxito
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);

}else if(checknota.checked == false && nota == ''){
    let firmaEntrada = {
        user_id: infoCoder.id,
        nota: 'Sin nota',
        // 1 para entrada, 0 para salida
        estado: 1 }
    await Asistencia.firmar(firmaEntrada)
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su entrada se ha registrado con éxito
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);
    }
}

//------------------------------------------------------------- Funcionalidad de Firmar Salida
async function grabarSalida(e){
    e.preventDefault()
    let alerta = document.getElementById('notaMsg');
//Captura de nota adjunta
let nota = document.getElementById("notaAdjunta").value
let checknota = document.getElementById("check")
if(checknota.checked == true  && nota == ''){
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor introduzca una nota
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000
  )
}
else if(checknota.checked == false && nota !=='')
{
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor confirme que quiere añadir la nota
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);

}
else if(checknota.checked == true && nota !== ''){
    nota = nota
  
    let firmaSalida = {
        user_id: infoCoder.id,
        nota: nota,
        // 1 para entrada, 0 para salida
        estado: 0 }
    await Asistencia.firmar(firmaSalida)
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su nota se ha añadido  y se ha registrado su salida con éxito
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);

}else if(checknota.checked == false && nota == ''){
    let firmaSalida = {
        user_id: infoCoder.id,
        nota: 'Sin nota',
        // 1 para entrada, 0 para salida
        estado: 0 }
    await Asistencia.firmar(firmaSalida)
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su salida se ha registrado con éxito
  </div>`
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);
    }
    }
