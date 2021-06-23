// Importación de todas las funciones creadas por los formadores
import {
   listadoAsistencias,
   registrarAsistencia,
   listadoTareas,
   crearTarea,
   completarTarea,
   borrarTarea,
   listadoPildoras,
   crearPildora,
   borrarPildora,
   actualizarPildora
 } from './llamadasApi.js';

// Console log del resultado de la primera llamada, el token se envía en blanco
console.log('=========== LISTADO DE EVENTOS==========================');
var x = await listadoAsistencias();
console.log(x);
const listado = document.getElementById('listado');

for (var i=0; i<6; i++) {
  console.log(x.data[i]);
  listado.innerHTML += '<li>'+ x.data[i].name +'</li>';
}



// A partir de esta línea podeis empezar a editar, nunca encima.


