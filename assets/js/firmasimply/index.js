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
  // Captura div con id 'notasMsg' desde index.html.
  let alerta = document.getElementById('notaMsg');
  // Ejecutar la función de manera asíncrona 'getlistadoFirmas()' de la clase 'Asistencia' del documento ´Asistencia.js´ importado dentro de la variable 'respuesta'
  let respuesta = await Asistencia.getlistadoFirmas();
  
  let mostrarOchoUltimos = respuesta;
  let ochoUltimos = mostrarOchoUltimos.slice(mostrarOchoUltimos.length - 8)



  //--------------------------------------------------FECHA:DíA--------------------------------  



  let titles0 = new Date (ochoUltimos[0].updated_at);
  let titlefirstCard0 = document.getElementById("firstCard");

  titlefirstCard0.innerHTML =  "Día: " + (titles0.getDate() + '/' + (titles0.getMonth() + 1) + '/' + titles0.getFullYear())

  let titles1 = new Date (ochoUltimos[1].updated_at);
  let titlefirstCard1 = document.getElementById("secondCard");

  titlefirstCard1.innerHTML =   "Día: " + (titles1.getDate() + '/' + (titles1.getMonth() + 1) + '/' + titles1.getFullYear())

  let titles2 = new Date (ochoUltimos[2].updated_at);
  let titlefirstCard2 = document.getElementById("thirdCard");

  titlefirstCard2.innerHTML =  "Día: " + (titles2.getDate() + '/' + (titles2.getMonth() + 1) + '/' + titles2.getFullYear())


  let titles3 = new Date (ochoUltimos[3].updated_at);
  let titlefirstCard3 = document.getElementById("thirdCard");

  titlefirstCard3.innerHTML =  "Día: " + (titles3.getDate() + '/' + (titles3.getMonth() + 1) + '/' + titles3.getFullYear())



  let titles4 = new Date (ochoUltimos[4].updated_at);
  let titlefirstCard4 = document.getElementById("fourthCard");

  titlefirstCard4.innerHTML =   "Día: " + (titles4.getDate() + '/' + (titles4.getMonth() + 1) + '/' + titles4.getFullYear())



  //--------------------------------------------------Entrada--------------------------------
   
  let estado1 = ochoUltimos.filter((a)=>{if(a.estado==1){return a}});


  let entradafirstCard0 = document.getElementById("entranceFirstCard0");
  let fechas0Estado1 = new Date (estado1[0].updated_at);

  entradafirstCard0.innerHTML = "Entrada: "  + (fechas0Estado1.getHours()-1) +  ":" + fechas0Estado1.getMinutes() + "H";

    let entradafirstCard1 = document.getElementById("entranceFirstCard1");
  let fechas1Estado1 = new Date (estado1[1].updated_at);

  entradafirstCard1.innerHTML = "Entrada: "  + fechas1Estado1.getHours() +  ":" + fechas1Estado1.getMinutes() + "H";

  let entradafirstCard2 = document.getElementById("entranceFirstCard2");
  let fechas2Estado1 = new Date (estado1[2].updated_at);

  entradafirstCard2.innerHTML = "Entrada: "  + fechas2Estado1.getHours() +  ":" + fechas2Estado1.getMinutes() + "H";

  let entradafirstCard3 = document.getElementById("entranceFirstCard3");
  let fechas3Estado1 = new Date (estado1[3].updated_at);

  entradafirstCard3.innerHTML = "Entrada: "  + fechas3Estado1.getHours() +  ":" + fechas3Estado1.getMinutes() + "H";



//--------------------------------------------------Salida--------------------------------

let estado0 = ochoUltimos.filter((a)=>{if(a.estado==0){return a}});

  let salidafirstCard0 = document.getElementById("exitFirstCard0");
  let fechas0Estado0 = new Date (estado0[0].updated_at);

  salidafirstCard0.innerHTML = "Salida: "  + fechas0Estado0.getHours() +  ":" + fechas0Estado0.getMinutes() + "H";

    let salidafirstCard1 = document.getElementById("exitFirstCard1");
  let fechas1Estado0 = new Date (estado0[1].updated_at);

  salidafirstCard1.innerHTML = "Salida: "  +fechas1Estado0.getHours() +  ":" + fechas1Estado0.getMinutes() + "H";

  let salidafirstCard2 = document.getElementById("exitFirstCard2");
  let fechas2Estado0 = new Date (estado0[2].updated_at);

  salidafirstCard2.innerHTML = "Salida: "  + fechas2Estado0.getHours() +  ":" + fechas2Estado0.getMinutes() + "H";

  let salidafirstCard3 = document.getElementById("exitFirstCard3");
  let fechas3Estado0 = new Date (estado0[3].updated_at);

  salidafirstCard3.innerHTML = "Salida: "  + fechas3Estado0.getHours() +  ":" + fechas3Estado0.getMinutes() + "H";

}
getListadoFirmas()

// Captura de botón "Entrada" del registro de asistencia en el HTML.
let btnEntrada = document.getElementById("entrada");

// Captura de botón "Entrada" cuando el usuario haga click en él y ejecutar la función 'grabarEntrada()'
btnEntrada.addEventListener("click", grabarEntrada, false);

// Captura de botón "Salida" del registro de asistencia en el HTML.
let btnSalida = document.getElementById("salida");

// Captura de botón "Salida" cuando el usuario haga click en él y ejecutar la función 'grabarSalida()'
btnSalida.addEventListener("click", grabarSalida, false);



//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Funcionalidad de Firmar Entrada
async function grabarEntrada(e) {
  e.preventDefault()


  //Captura de nota adjunta al registro de asistencia.
  let nota = document.getElementById("notaAdjunta").value;

  // Captura del estado del checkbox (si está marcado o sin marcar).
  let checknota = document.getElementById("check");

  // Captura div con id 'notasMsg' desde index.html.
  let alerta = document.getElementById('notaMsg');

  // Captura del estado del checkbox (si está marcado o sin marcar)
  if (checknota.checked == true && nota == '') {
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor introduzca una nota
  </div>`

    // Cantidad de tiempo para mostrar el "div" alerta, medido en milisegundos, 1000ms = 1 segundo.
    setTimeout(function () { alerta.innerHTML = '' }, 3000);
  }

  // Condicional 2º: si NO está marcado el checkbox y el textarea de notas NO está vacío...
  else if (checknota.checked == false && nota !== '') {

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'notaMsg' con el mensaje " Por favor confirme que quiere añadir la nota".
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor confirme que quiere añadir la nota
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
    setTimeout(
      function () {
        alerta.innerHTML = ''
      }, 3000);

  }
  else if (checknota.checked == true && nota !== '') {
    nota = nota
    let firmaEntrada = {
      user_id: infoCoder.id,
      nota: nota,
      // 1 para entrada, 0 para salida
      estado: 1
    }

    // Introducir valores del objeto"firmarEntrada" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaEntrada)

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'alerta' con el mensaje "Su nota se ha añadido  y se ha registrado su entrada con éxito".
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su nota se ha añadido  y se ha registrado su entrada con éxito
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
    setTimeout(
      function () {
        alerta.innerHTML = ''
      }, 3000);

    // Condicional 2º: si NO está marcado el checkbox y el textarea de notas está vacío...
  } else if (checknota.checked == false && nota == '') {
    let firmaEntrada = {
      user_id: infoCoder.id,
      nota: 'Sin nota',
      // 1 para entrada, 0 para salida
      estado: 1
    }

    // Introducir valores del objeto"firmarEntrada" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaEntrada)

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'alerta' con el mensaje " Su entrada se ha registrado con éxito".
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su entrada se ha registrado con éxito
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
    setTimeout(
      function () {
        alerta.innerHTML = ''
      }, 3000);
  }
}

//-------------------------------------------------DESABILITAR BOTÓN ENTRADA DE 00:00h - 08:00h Y DE 16:00h-23:59h

  let horas = new Date().getHours()

  if((horas < 8 ) || (horas > 16)){
    btnSalida.disabled=true
 btnEntrada.disabled=true
  }else{
    btnSalida.disabled=false
    btnEntrada.disabled = false; 
  }




//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Funcionalidad de Firmar Salida
async function grabarSalida(e) {
  e.preventDefault()

  let alerta = document.getElementById('notaMsg');
  //Captura el contenido escrito del textarea con el id 'notaAdjunta' desde index.html.
  let nota = document.getElementById("notaAdjunta").value

  // Captura el elemento checkbox con id "check" desde index.html.
  let checknota = document.getElementById("check")

  // Condicional 1º: si está marcado el checkbox y el textarea de notas está vacío...
  if (checknota.checked == true && nota == '') {

    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'notaMsg' con el mensaje "Porfavor introduzca una nota".
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor introduzca una nota
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
    setTimeout(
      function () { alerta.innerHTML = '' }, 3000)
  }

  // Condicional 2º: si NO está marcado el checkbox y el textarea de notas NO está vacío...
  else if (checknota.checked == false && nota !== '') {
    // Insertar en el HTML un elemento div con estilos de boostrap dentro del div con id 'notaMsg' con el mensaje " Por favor confirme que quiere añadir la nota".
    alerta.innerHTML = `<div class="alert alert-danger" role="alert">
    Por favor confirme que quiere añadir la nota
  </div>`

    // Cantidad de tiempo para mostrar el "div" de la variable 'alerta', medido en milisegundos, 1000ms = 1 segundo.
    setTimeout(
      function () {
        alerta.innerHTML = ''
      }, 3000);
  }
  // Condicional 3º: si está marcado el checkbox y el textarea de notas NO está vacío...
  else if (checknota.checked == true && nota !== '') {
    // Introducir el contenido de la variable 'nota' dentro de la propiedad nota del objeto "firmaSalida".
    nota = nota
    // Objeto firmaSalida que contiene el ID del usuario, nota para adjuntar y si ha firmado la entrada o la salida.
    let firmaSalida = {
      user_id: infoCoder.id,
      nota: nota,
      // 1 para entrada, 0 para salida
      estado: 0
    }

    // Introducir valores del objeto"firmarSalida" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaSalida)

    // Con la variable 'alerta' (es un div en el index.html) introducir otro div con clases de boostrap como tarjeta de información con el texto `Su nota se ha añadido  y se ha registrado su salida con éxito`.
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su nota se ha añadido  y se ha registrado su salida con éxito
  </div>`

    // Duración del cuadro de texto "alerta"
    setTimeout(
      function () {
        alerta.innerHTML = ''
      }, 3000);


    // Condicional 2º: si NO está marcado el checkbox y el textarea de notas está vacío...
  } else if (checknota.checked == false && nota == '') {

    // Objeto firmaSalida que contiene el ID del usuario, nota para adjuntar con el texto "Sin nota" y si ha firmado la entrada o la salida.
    let firmaSalida = {
      user_id: infoCoder.id,
      nota: 'Sin nota',
      // 1 para entrada, 0 para salida
      estado: 0
    }

    // Introducir valores del objeto"firmarSalida" dentro de la clase Asistencia.
    await Asistencia.firmar(firmaSalida)

    // Con la variable 'alerta' (es un div en el index.html) introducir otro div con clases de boostrap como tarjeta de información con el texto `Su nota se ha registrado su salida con éxito`.
    alerta.innerHTML = `<div class="alert alert-success" role="alert">
    Su salida se ha registrado con éxito
  </div>`

    // Duración del cuadro de texto "alerta"
    setTimeout(
      function () {
        alerta.innerHTML = ''
      }, 3000);
  }
}


////////////////////////////////////////////////////////////////////////Listado de Píldoras////////////////////////////////////////////////////////////////////////////////

async function getListadoPildoras(){
  // Consultar el listado de píldoras
  let pildorasListado = await Pildora.getListadoPildoras()
  


// Crear una píldora
// let pildora = {
//   nombre: 'Typescript2',
//   descripcion: 'Aprende conceptos básicos de Typescript',
//   fecha_presentacion: '2021-07-12',
//   estado: 1, // 0 pendiente, 1 presentada
//   user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
// };
// Pildora.crearPildora(pildora);



let cuatroUltimasPildoras = pildorasListado.slice(pildorasListado.length - 4)

console.log(cuatroUltimasPildoras)



let nombrePildora1 = cuatroUltimasPildoras[0].nombre
let estadoPildora1 = cuatroUltimasPildoras[0].estado
let fechaPildora1 = cuatroUltimasPildoras[0].fecha_presentacion
let descripcionPildora1 = cuatroUltimasPildoras[0].descripcion
let titlePildora1 = document.getElementById("pildorafirstCard");
let pildoraestado1 = document.getElementById("pildoraestado1");
let pildorafecha1 = document.getElementById("pildorafecha1");
let pildoradescripcion1 = document.getElementById("pildoradescripcion1");
titlePildora1.innerHTML =  nombrePildora1
if(estadoPildora1 == 0){
  pildoraestado1.innerHTML =  "Pendiente"
}else{
  pildoraestado1.innerHTML =  "Presentada"
}
pildorafecha1.innerHTML =  fechaPildora1
pildoradescripcion1.innerHTML =  descripcionPildora1







let nombrePildora2 = cuatroUltimasPildoras[1].nombre
let estadoPildora2 = cuatroUltimasPildoras[1].estado
let fechaPildor2 = cuatroUltimasPildoras[1].fecha_presentacion
let descripcionPildora2 = cuatroUltimasPildoras[1].descripcion
let titlePildora2 = document.getElementById("pildorasecondCard");
let pildoraestado2 = document.getElementById("pildoraestado2");
let pildorafecha2 = document.getElementById("pildorafecha2");
let pildoradescripcion2 = document.getElementById("pildoradescripcion2");
titlePildora2.innerHTML =  nombrePildora2
if(estadoPildora2 == 0){
  pildoraestado2.innerHTML =  "Pendiente"
}else{
  pildoraestado2.innerHTML =  "Presentada"
}
pildorafecha2.innerHTML =  fechaPildor2
pildoradescripcion2.innerHTML =  descripcionPildora2





let nombrePildora3 = cuatroUltimasPildoras[2].nombre
let estadoPildora3 = cuatroUltimasPildoras[2].estado
let fechaPildora3 = cuatroUltimasPildoras[2].fecha_presentacion
let descripcionPildora3 = cuatroUltimasPildoras[2].descripcion
let titlePildora3 = document.getElementById("pildorathirdCard");
let pildoraestado3 = document.getElementById("pildoraestado3");
let pildorafecha3 = document.getElementById("pildorafecha3");
let pildoradescripcion3 = document.getElementById("pildoradescripcion3");
titlePildora3.innerHTML =  nombrePildora3
if(estadoPildora3 == 0){
  pildoraestado3.innerHTML =  "Pendiente"
}else{
  pildoraestado3.innerHTML =  "Presentada"
}
pildorafecha3.innerHTML =  fechaPildora3
pildoradescripcion3.innerHTML =  descripcionPildora3




let nombrePildora4 =cuatroUltimasPildoras[3].nombre
let estadoPildora4 = cuatroUltimasPildoras[3].estado
let fechaPildora4 = cuatroUltimasPildoras[3].fecha_presentacion
let descripcionPildora4 = cuatroUltimasPildoras[3].descripcion
let titlePildora4= document.getElementById("pildorafourthCard");
let pildoraestado4 = document.getElementById("pildoraestado4");
let pildorafecha4 = document.getElementById("pildorafecha4");
let pildoradescripcion4 = document.getElementById("pildoradescripcion4");
titlePildora4.innerHTML =  nombrePildora4
if(estadoPildora4 == 0){
  pildoraestado4.innerHTML =  "Pendiente"
}else{
  pildoraestado4.innerHTML =  "Presentada"
}
pildorafecha4.innerHTML =  fechaPildora4
pildoradescripcion4.innerHTML =  descripcionPildora4




}
getListadoPildoras();


////////////////////////////////////////////////////////////////////////Listado de Tareas////////////////////////////////////////////////////////////////////////////////

async function getListadoTareas(){
  // Consultar el listado de píldoras
  let tareasListado = await Tarea.getListadoTareas();
  


// Crear una tarea
// let tarea = {
//         titulo: 'Tarea nueva',
//         descripcion: 'Lorem Ipsum',
//         estado: 0, // 0 pendiente, 1 completada
//         user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
//         categoria_id: 1,
//     };

//  Tarea.crearTarea(tarea);


let mostrarUltimasTareas = tareasListado;
let cuatroUltimasTareas = mostrarUltimasTareas.slice(mostrarUltimasTareas.length - 4)

console.log(cuatroUltimasTareas)



}
getListadoTareas();