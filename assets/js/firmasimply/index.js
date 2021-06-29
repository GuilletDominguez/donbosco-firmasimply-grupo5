import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';

//Informacion Dinámica del usuario logueado
let infoCoder = Auth.getCoder()
let emailUser = document.getElementById('usuario');
emailUser.innerHTML = infoCoder.name;

////////////////////////////////////////////////////////////////////////Funcionalidad de Firmar//////////////////////////////////////

async function getListadoFirmas() {

    // Ejecutar la función de manera asíncrona 'getlistadoFirmas()' de la clase 'Asistencia' del documento ´Asistencia.js´ importado dentro de la variable 'respuesta'
    let respuesta = await Asistencia.getlistadoFirmas();

    // Mostrar por consola el contenido de la variable 'respuesta', después de haber ejecutado la función 'getlistadoFirmas()'.
    console.log(respuesta);
}

// Captura de botón "Entrada" del registro de asistencia en el HTML.
let btnEntrada = document.getElementById("entrada");

// Captura de botón "Entrada" cuando el usuario haga click en él y ejecutar la función 'grabarEntrada()'
btnEntrada.addEventListener("click",grabarEntrada,false);

// Captura de botón "Salida" del registro de asistencia en el HTML.
let btnSalida = document.getElementById("salida");

// Captura de botón "Salida" cuando el usuario haga click en él y ejecutar la función 'grabarSalida()'
btnSalida.addEventListener("click",grabarSalida,false);



//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Funcionalidad de Firmar Entrada
async function grabarEntrada(e){
    e.preventDefault()


//Captura de nota adjunta al registro de asistencia.
let nota = document.getElementById("notaAdjunta").value;

// Captura del estado del checkbox (si está marcado o sin marcar).
let checknota = document.getElementById("check");

// Captura div con id 'notasMsg' desde index.html.
let alerta = document.getElementById('notaMsg');

// Captura del estado del checkbox (si está marcado o sin marcar)
if(checknota.checked == true  && nota == ''){
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor introduzca una nota
  </div>`

      // Cantidad de tiempo para mostrar el "div" alerta, medido en milisegundos, 1000ms = 1 segundo.
  setTimeout(function(){alerta.innerHTML = ''},3000);
}

// Condicional 2º: si NO está marcado el checkbox y el textarea de notas NO está vacío...
else if(checknota.checked == false && nota !==''){

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'notaMsg' con el mensaje " Por favor confirme que quiere añadir la nota".
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor confirme que quiere añadir la nota
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
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

    // Introducir valores del objeto"firmarEntrada" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaEntrada)

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'alerta' con el mensaje "Su nota se ha añadido  y se ha registrado su entrada con éxito".
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su nota se ha añadido  y se ha registrado su entrada con éxito
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);

// Condicional 2º: si NO está marcado el checkbox y el textarea de notas está vacío...
}else if(checknota.checked == false && nota == ''){
    let firmaEntrada = {
        user_id: infoCoder.id,
        nota: 'Sin nota',
        // 1 para entrada, 0 para salida
        estado: 1 }

    // Introducir valores del objeto"firmarEntrada" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaEntrada)

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'alerta' con el mensaje " Su entrada se ha registrado con éxito".
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su entrada se ha registrado con éxito
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);
    }
}

//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Funcionalidad de Firmar Salida
async function grabarSalida(e){
    e.preventDefault()


//Captura el contenido escrito del textarea con el id 'notaAdjunta' desde index.html.
let nota = document.getElementById("notaAdjunta").value

// Captura div con id 'notasMsg' desde index.html.
let alerta = document.getElementById('notaMsg');

// Captura el elemento checkbox con id "check" desde index.html.
let checknota = document.getElementById("check")

// Condicional 1º: si está marcado el checkbox y el textarea de notas está vacío...
if(checknota.checked == true  && nota == ''){

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'notaMsg' con el mensaje "Porfavor introduzca una nota".
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor introduzca una nota
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
  setTimeout(
      function(){alerta.innerHTML = ''},3000)
}

// Condicional 2º: si NO está marcado el checkbox y el textarea de notas NO está vacío...
else if(checknota.checked == false && nota !=='')
{
    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'notaMsg' con el mensaje " Por favor confirme que quiere añadir la nota".
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor confirme que quiere añadir la nota
  </div>`

   // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);
}
// Condicional 3º: si está marcado el checkbox y el textarea de notas NO está vacío...
else if(checknota.checked == true && nota !== '')
{
    // Introducir el contenido de la variable 'nota' dentro de la propiedad nota del objeto "firmaSalida".
    nota = nota
    // Objeto firmaSalida que contiene el ID del usuario, nota para adjuntar y si ha firmado la entrada o la salida.
    let firmaSalida = {
        user_id: infoCoder.id,
        nota: nota,
        // 1 para entrada, 0 para salida
        estado: 0 }

    // Introducir valores del objeto"firmarSalida" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaSalida)

    // Con la variable 'alerta' (es un div en el index.html) introducir otro div con clases de boostrap como tarjeta de información con el texto `Su nota se ha añadido  y se ha registrado su salida con éxito`.
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su nota se ha añadido  y se ha registrado su salida con éxito
  </div>`

  // Duración del cuadro de texto "alerta"
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);


// Condicional 2º: si NO está marcado el checkbox y el textarea de notas está vacío...
}else if(checknota.checked == false && nota == ''){

    // Objeto firmaSalida que contiene el ID del usuario, nota para adjuntar con el texto "Sin nota" y si ha firmado la entrada o la salida.
    let firmaSalida = {
        user_id: infoCoder.id,
        nota: 'Sin nota',
        // 1 para entrada, 0 para salida
        estado: 0 }

    // Introducir valores del objeto"firmarSalida" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaSalida)

    // Con la variable 'alerta' (es un div en el index.html) introducir otro div con clases de boostrap como tarjeta de información con el texto `Su nota se ha registrado su salida con éxito`.
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su salida se ha registrado con éxito
  </div>`

    // Duración del cuadro de texto "alerta"
  setTimeout(
      function(){
      alerta.innerHTML = ''},3000);
    }
    }
