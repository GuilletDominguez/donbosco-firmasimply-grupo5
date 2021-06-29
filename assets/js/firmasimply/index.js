import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';

//Informacion Dinámica del usuario logueado
let infoCoder = Auth.getCoder()
let emailUser = document.getElementById('usuario');
emailUser.innerHTML = infoCoder.name;

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
let checknota = document.getElementById("check")

if(checknota.checked == true  && nota == ''){
    alert('Por favor introduzca una nota')
}
else if(checknota.checked == false && nota !=='')
{
    alert('Por favor confime que quiere añadir la nota')

}
else if(checknota.checked == true && nota !== ''){
    nota = nota
    alert('su nota se ha añadido con exito')
    let firmaEntrada = {
        user_id: infoCoder.id,
        nota: nota,
        // 1 para entrada, 0 para salida
        estado: 1 }
    await Asistencia.firmar(firmaEntrada)
    alert('se ha registrado la entrada')
    console.log(getListadoFirmas())

}else if(checknota.checked == false && nota == ''){
    let firmaEntrada = {
        user_id: infoCoder.id,
        nota: 'Sin nota',
        // 1 para entrada, 0 para salida
        estado: 1 }
    await Asistencia.firmar(firmaEntrada)
    alert('se ha registrado la entrada')
    console.log(getListadoFirmas())
    }
}

//------------------------------------------------------------- Funcionalidad de Firmar Salida
async function grabarSalida(e){
    e.preventDefault()

//Captura de nota adjunta
let nota = document.getElementById("notaAdjunta").value
let checknota = document.getElementById("check")
if(checknota.checked == true  && nota == ''){
    alert('Por favor introduzca una nota')
}
else if(checknota.checked == false && nota !=='')
{
    alert('por favor confime que quiere añadir la nota')

}
else if(checknota.checked == true && nota !== ''){
    nota = nota
    alert('su nota se ha añadido con exito')
    let firmaSalida = {
        user_id: infoCoder.id,
        nota: nota,
        // 1 para entrada, 0 para salida
        estado: 0 }
    await Asistencia.firmar(firmaSalida)
    alert('se ha registrado la salida')
    console.log(getListadoFirmas())

}else if(checknota.checked == false && nota == ''){
    let firmaSalida = {
        user_id: infoCoder.id,
        nota: 'Sin nota',
        // 1 para entrada, 0 para salida
        estado: 0 }
    await Asistencia.firmar(firmaSalida)
    alert('se ha registrado la salida')
    console.log(getListadoFirmas())
    }
}