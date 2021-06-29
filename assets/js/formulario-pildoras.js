import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

async function getListadoPildoras() {
    //
    Pildora.getListadoPildoras();
}

// Funcionalidad crear píldora
//
    function crearPildora(arg){
        let pildora = {
            nombre: document.getElementById('name').value,
            descripcion: document.getElementById('message').value,
            fecha_presentacion: document.getElementById('fname').value,
            estado: 0, // 0 pendiente, 1 presentada
            user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
    };
 console.log(nombre);

    let nombre = document.getElementById('name').value;
        fecha = document.getElementById('fname').value;
        descripcion = document.getElementById('message').value;
        if(nombre === "" || fecha === "" || descripcion === "") {
            //console.log("hola");
            alert('Por favor, rellene los campos', 'danger');
        } else {
            crearPildora(pildora);
        }      
}

// Funcionalidad borrar píldora
//
let idPildora = 2;
Tarea.borrarPildora(idPildora);

// Funcionalidad marcar una píldora como presentada o pendiente
//
let idPildora = 2;
let data = { estado: 1 }; // 1 presentada, 0 pendiente
Tarea.marcarPildora(data, idPildora);





