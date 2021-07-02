//import { borrarPildora } from './firmasimply/Modules/API/llamadasApi.js';
import Auth from './firmasimply/Modules/Auth/Auth.js';
import Pildora from './firmasimply/Modules/Pildora.js';
import Tarea from './firmasimply/Modules/Tarea.js';

mostrarSeisPildoras();

// mostrar las seis pildoras
//
async function mostrarSeisPildoras(){
    let listado = await Pildora.getListadoPildoras();     
    const list = document.getElementById('pildora-list'); 
    // let ultimas = listado.slice(listado.length-6);
    let ultimas = listado.reverse();
    for (let x = 0; x < ultimas.length; x++){
       
        if (x < 6){ 
           
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${listado[x].nombre}</td>
                <td>${listado[x].descripcion}</td>
                <td>${listado[x].fecha_presentacion}</td>
                <td>${truncateString(listado[x].created_at,10)}</td>
                <td style="display : none">${listado[x].id}</td>
                <td>
                    <select name="esta" id="select">
                        <option value="presentada">Pendiente</option>
                        <option value="pendiente">Presentada</option>
                    </select>
                </td>
                <td><a href="#" id="borrar" class="btn btn-danger btn-sm delete">X</td>
                ` 
                list.appendChild(row); 
        }   
    }
};

// Funcionalidad crear píldora
//
let hola=document.getElementById('prueba');

hola.addEventListener('click',crearPildora, false);
    async function crearPildora(e){
        e.preventDefault();
        const hoy = new Date();
       
        let nombre = document.getElementById('name').value;
        let fecha = document.getElementById('fname').value;
        let descripcion = document.getElementById('message').value;

        let pildora = {
            nombre: nombre,
            descripcion: descripcion,
            fecha_presentacion: fecha,
            created_at: hoy.toDateString(), 
        //    estado: estado,  0 pendiente, 1 presentada
            user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
            id : Pildora.getListadoPildoras().id
    };    
        if(nombre == "" || fecha == "" || descripcion == "") {
            alert('Por favor, rellene los campos');
        } else {
            await Pildora.crearPildora(pildora);
            alert('Pildora nueva creada','danger');
            limpiarCampos();
            cargarPildora(pildora);
        }      
}
function limpiarCampos(){
    document.getElementById('name').value="";
    document.getElementById('fname').value="";
    document.getElementById('message').value="";
}
function cargarPildora(pildora){

    const fecha=new Date;
    const list = document.getElementById('pildora-list'); 
        
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${pildora.nombre}</td>
        <td>${pildora.descripcion}</td>
        <td>${pildora.fecha_presentacion}</td>
        <td>${pildora.created_at}</td>
        <td style="display : none">${pildora.id}</td>
        <td>
            <select name="esta" id="select">
                <option class="seleccionado" value="presentada">Presentada</option>
                <option class="pendiente" value="pendiente">Pendiente</option>
            </select>
        </td>
        <td><a href="#" id="borrar" class="btn btn-danger btn-sm delete" name="delete">X</td>
        `;
        list.appendChild(row);
} 


//función para truncar la fecha y mostrarla corta
   
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr ;
    } else {
        return str;
    }
}
let btncambiar = document.addEventListener('cambiar',marcarPildora,false);

function marcarPildora(){

        let pepe = document.getElementById('select');
        let seleccionado = document.querySelector('seleccionado');
        let pendiente = document.querySelector('pendiente');
        pepe.addEventListener('click', alert('hola'));
       
            let idPildora;
            let pendientes = 0;
            if (seleccionado ==pendientes){
                pildora.estado = pendientes;
                console.log(pildora.estado)
            }else {
                idPildora = 1;
            }
            let data = { estado: idPildora }; // 1 presentada, 0 pendiente
            Pildora.marcarPildora(data, idPildora);
            alert("Has cambiado el estado de la pildora");
        
}

// borrar pildora
//
// document.getElementById('pildora-list').addEventListener('click', borrarPildora(),false);
// async function borrarPildora(){     
//     const list = Pildora.getListadoPildoras();
//     let idPildora = getListadoPildoras();
//     for (let x=0; x < list.length; x++){  
//         if (list[x].id == idPildora){
//             Pildora.borrarPildora(idPildora);
//             alert('Pildora borrada','danger');
//         }
//     } 
// } 

function deletePildora() {
    document.querySelector('#pildora-list').addEventListener('click', (e) => {
       
        removePildora(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.parentElement.remove();
        }
        alert('Pildora borrada', 'success');
    });

}
async function removePildora(id) {
    let borrar = await Pildora.getListadoPildoras();
   
    borrar.forEach((pico, index) => {
        if (pico.id === id) {
            
            console.log(deletBook.splice(index, 1))
            console.log(id)
        }
    });
    
    Pildora.borrarPildora(id)
}
deletePildora()







