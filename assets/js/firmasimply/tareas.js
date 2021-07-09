console.log("test");
import Auth from './/Modules/Auth/Auth.js';
import Tarea from './/Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';


let infoCoder = Auth.getCoder()
let emailUser = document.getElementById('usuario');
 emailUser.innerHTML = infoCoder.name;

 mostrarSeisTareas();

 async function  mostrarSeisTareas(){
     let listado = await Tarea.getListadoTareas();     
     const list = document.getElementById('book-list'); 
     // let ultimas = listado.slice(listado.length-6);
     let ultimas = listado.reverse();
     for (let x = 0; x < ultimas.length; x++){    
         if (x < 6){   
              
             const row = document.createElement('tr');
                
             let text1;
             if (listado[x].estado == 0){
                 // console.log(listado[x].estado);
                 text1 = `<td><label><input type="checkbox" id="${listado[x].id}" class="pulsado"  value="${listado[x].estado}">Pendiente</label></td>`;
             }else{
                 text1 = `<td><label><input type="checkbox" id="${listado[x].id}" class="pulsado" checked="true" value="${listado[x].estado}">Presentada</label></td>`;
             }  

             row.innerHTML = `
                 <td>${listado[x].titulo}</td>
                  <td>${listado[x].descripcion}</td>
                 <td>${truncateString(listado[x].created_at,10)}</td>
                 <td>${listado[x].id}</td>
                 ${text1}
                 <td><a href="#" id="${listado[x].id}" class="btn btn-danger btn-sm delete">X</td>
                 ` 
                 list.appendChild(row); 
         }  
     } 
 
  
  // Event: Add a Tarea
  document.querySelector('#editsubmit').addEventListener('click', crearTarea, false )

  async function crearTarea(e) {
    e.preventDefault();
    // Prevent actual submit
    
    let nombre = document.querySelector('#nombre').value;
    let descripcion = document.querySelector('#descripcion').value;
    let fecha = new Date();

    let tarea = {
      titulo: nombre,
      descripcion: descripcion,                //'Lorem Ipsum',
      fecha:fecha,
      estado: 0,                              // 0 pendiente, 1 completada
      user_id: Auth.getCoder().id,           // esta funcion devuelve el id del coder logeado
      categoria_id: 1,
     
     };


    // Validate
    if(nombre  === '' || descripcion === '' || fecha === ''  ) {
      showAlert('Por favor rellena todos los campos', 'danger');
    } else {
     
      await Tarea.crearTarea(tarea);
      // Add tarea
      addtareaToList(tarea)  

      // Clear fields
      clearFields()

    }
  };

 async function addtareaToList(tarea) {
  const list = document.getElementById('book-list'); 
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${tarea.titulo}</td>
        <td>${tarea.descripcion}</td>
        <td>${truncateString(tarea.fecha,10)}</td>
        <td >${tarea.id}</td>
        <td> <td><label><input type="checkbox" id="${tarea.id}" class="pulsado" > Presentada </label></td>
        <td> <a href="#" id="${tarea.id}" class="btn btn-danger btn-sm delete"> X   </td>
        ` 
       list.appendChild(row); 
  }

  //<td><label><input type="checkbox" id="${tarea.id}" class="pulsado" value="${tarea.estado}">Presentada</label></td>
  //<td> <button id="add" class="success "> &#10004; </button> </td>
     
  let o = document.querySelector('.pulsado');
  o.style.fontSize = "100px";
 

   function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
   
   
    const container = document.querySelector('.container');
    const form = document.querySelector('#flexbox');
    container.insertBefore(div, form); 

   // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }


  function clearFields() {
    document.querySelector('#nombre').value = '';
 
    document.querySelector('#descripcion').value = '';
  }


  

  //#MarcarTareas
  document.querySelector('#book-list').addEventListener('click', marcarTareas ) 
    async function marcarTareas(e) {
     
      let marcado = document.querySelector('.pulsado').checked;
      
      
      if (marcado == true) {
          let valor = e.target.value
          valor = 1;
          let data = {
              estado : valor
              
          }
          await Tarea.marcarTarea(data,e.target.id);
          console.log(data);
      }else
      {   let valor = e.target.value
          valor = 0;
          let data = {
              estado : valor
          }
          await Tarea.marcarTarea(data,e.target.id);
          console.log(data);
      }
      

     
    }
 

  //#DeletTarea
document.querySelector('#book-list').addEventListener('click', deletTarea);
async function deletTarea(e){
 
  if (e.target.classList.contains('delete')){
   await Tarea.borrarTarea(e.target.id);
    alert('Tarea Borrada');
    window.location.reload();
  
  }
}

  console.log(await Tarea.getListadoTareas());
function truncateString(str, num) {
  if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr ;
  } else {
      return str;
  }
}

}
