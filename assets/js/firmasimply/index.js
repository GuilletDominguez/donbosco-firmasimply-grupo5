import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';


async function getListadoFirmas() {
    let respuesta = await Asistencia.getlistadoFirmas();
    //console.log(respuesta);
    // Tu Código
}

// Funcionalidad de Firmar

// Funcionalidad mostrar Listado Tareas

// Funcionalidad mostrar Listado Píldoras