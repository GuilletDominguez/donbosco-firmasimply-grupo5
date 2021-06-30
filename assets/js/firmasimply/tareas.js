import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';


// Funcionalidad mostrar listado de tareas
Tarea.getListadoTareas();
// Funcionalidad crear una tarea
let send= document.querySelector('#editsubmit')
let titulo= document.querySelector('#nombre')
let tarea = {
    titulo: titulo,
    descripcion: 'Lorem Ipsum',
    estado: 0, // 0 pendiente, 1 completada
    user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
    categoria_id: 1,
};
send.addEventListener('click', Tarea.crearTarea(tarea))
Tarea.crearTarea(tarea)

// Funcionalidad de borrar una tarea
let idTarea = 2;

Tarea.borrarTarea(idTarea);

// Marcar una tarea como completada o pendiente
//let idTarea = 2;
let data = { estado: 1 };          // 1 completada, 0 pendiente
Tarea.marcarTarea(data, idTarea);

// Funcionalidad de marcar una tarea como completada o pendiente
let idPildora = 2;
let data = { estado: 1 }; // 1 presentada, 0 pendiente
Tarea.marcarPildora(data, idPildora);

// Funcionalidad de cargar las categorias en el formulario de crear la tarea
Categoria.getListadoCategorias();
