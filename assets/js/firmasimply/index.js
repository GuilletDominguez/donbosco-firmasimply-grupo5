import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';

//Informacion Dinámica del usuario logueado
let info = Auth.getCoder()
let emailUser = document.getElementById('usuario');
emailUser.innerHTML = info.name;

// Funcionalidad de Firmar

// Funcionalidad mostrar Listado Tareas

// Funcionalidad mostrar Listado Píldoras