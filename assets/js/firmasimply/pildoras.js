import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';
import Tarea from './Modules/Tarea.js';
// mostrar las seis últimas pildoras
//
mostrarSeisPildoras();

async function mostrarSeisPildoras(){
    let listado = await Pildora.getListadoPildoras(); 
    const list = document.getElementById('pildora-list'); 
    // let ultimas = listado.slice(listado.length-6);
    let ultimas = listado.reverse();
    
    for (let x = 0; x < ultimas.length; x++){   
        if (x < 6){            
            const row = document.createElement('tr');

            let text1;
            if (listado[x].estado == 0){
                text1 = `<td><label><input type="checkbox" id="${listado[x].id}" class="pulsado"  value="${listado[x].estado}">Pendiente</label></td>`;
            }else{
                text1 = `<td><label><input type="checkbox" id="${listado[x].id}" class="pulsado" checked="true" value="${listado[x].estado}">Presentada</label></td>`;
            }
            row.innerHTML = `
                <td>${listado[x].nombre}</td>
                <td>${listado[x].descripcion}</td>
                <td>${listado[x].fecha_presentacion}</td>
                <td>${truncateString(listado[x].created_at,10)}</td>
                <td style="display : none">${listado[x].id}</td>
                ${text1}
                <td><a href="#" id="${listado[x].id}" class="btn btn-danger btn-sm delete">X</td>
                `                
                list.appendChild(row);        
        }  
    }   
    // fechas
    let listado1 = await Pildora.getListadoPildoras(); 
    const fecha=new Date;  
    var primerDiaSemana = new Date (fecha.setDate(fecha.getDate() - fecha.getDay()));
    var ultimoDiaSemana = new Date(fecha.setDate(fecha.getDate() - fecha.getDay()+6));
    const priDiaSemana = primerDiaSemana.toISOString(new Date(fecha.setDate(fecha.getDate() - fecha.getDay()))); //primer dia semana actual en formato corto
    const ultDiaSemana = ultimoDiaSemana.toISOString(new Date(fecha.setDate(fecha.getDate() - fecha.getDay()))); //ultimo dia semana actual en formato corto
    
    let contador=0;   
    let contadorPendientes=0;
    for (let i = 0; i < listado1.length; i++){   
        let pruebaFecha = truncateString(listado1[i].created_at,10); //fecha creacion de la pildora
            if (pruebaFecha >= truncateString(priDiaSemana,10) && pruebaFecha <= truncateString(ultDiaSemana,10) && listado1[i].estado == 1){
                contador = contador + 1;
                document.getElementById('totalpresentadas').innerHTML = contador;
            } else if(listado1[i].estado == 0 ){
                contadorPendientes = contadorPendientes+1;
                document.getElementById('totalpendientes').innerHTML = contadorPendientes;
            }       
    }       
// funcionalidad marcar pildora como presentada o pendiente
    document.querySelector('#pildora-list').addEventListener('click', marcarPildora);
    
    async function marcarPildora(e) {
        e.preventDefault();
        let marcado = document.querySelector('.pulsado').checked;
        
        if (marcado == true) {
            let valor = e.target.value
            valor = 1;
            let data = {
                estado : valor
            }
            await Pildora.marcarPildora(data,e.target.id);
        }else
        {   let valor = e.target.value
            valor = 0;
            let data = {
                estado : valor
            }
            await Pildora.marcarPildora(data,e.target.id);
        }
        window.location.reload(); 
    }  
        
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
            window.location.reload();
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
        <td><label><input type="checkbox" id="" class="pulsado" checked="" value="">Presentada</label></td>
        <td><a href="#" id="borrar" class="btn btn-danger btn-sm delete" name="delete">X</td>
        `;
        list.appendChild(row);
        window.location.reload;
} 

//función para truncar la fecha y mostrarla corta
//  
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr ;
    } else {
        return str;
    }
}



// función borrar píldora
//
document.querySelector('#pildora-list').addEventListener('click', deletePildora);

async function deletePildora(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        await Pildora.borrarPildora(e.target.id);
        alert('Pildora borrada');
        window.location.reload();
    }
}
}
