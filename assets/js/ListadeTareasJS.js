
import Auth from './firmasimply/Modules/Auth/Auth.js';
import Tarea from './firmasimply/Modules/Tarea.js';
import Categoria from './firmasimply/Modules/Categoria.js';

// const tareasArray = listadoTareas  || [];
let infoCoder = Auth.getCoder()
let emailUser = document.getElementById('usuario');
 emailUser.innerHTML = infoCoder.name;

 mostrarSeisPildoras();

 async function mostrarSeisPildoras(){
     let listado = await Tarea.getListadoTareas();     
     const list = document.getElementById('book-list'); 
     // let ultimas = listado.slice(listado.length-6);
     let ultimas = listado.reverse();
     for (let x = 0; x < ultimas.length; x++){    
         if (x < 6){   
              
             const row = document.createElement('tr');
             row.innerHTML = `
                 <td>${listado[x].titulo}</td>
                 
                  <td>${listado[x].descripcion}</td>
                 <td>${truncateString(listado[x].created_at,10)}</td>
                 <td style="display : none">${listado[x].id}</td>
                 <td><label><input type="checkbox" id="${listado[x].id}" class="pulsado" value="${listado[x].estado}">Presentada</label></td>
                 <td><a href="#" id="${listado[x].id}" class="btn btn-danger btn-sm delete">X</td>
                 ` 
                 list.appendChild(row); 
         }   
     }
 }
  
  // Event: Add a Book
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

  //Tarea.crearTarea(tarea);
  
    // Validate
    if(nombre  === '' || descripcion === '' || fecha === ''  ) {
      showAlert('Por favor rellena todos los campos', 'danger');
    } else {
      // Instatiate book
      // const book = new Book(nombre , categoria , descripcion , fecha );

      // await Tarea.crearTarea(tarea);
      Tarea.crearTarea(tarea);
      // Add Book to UI
      addtareaToList(tarea)  

   
       // count
       count();
        
    
      // Add book to store
     // Store.addBook(book);
  

      // Show success message
      // UI.showAlert('Tarea añadido', 'success');
  
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
        <td style="display : none">${tarea.id}</td>
        <td><label><input type="checkbox" id="${tarea.id}" class="pulsado" value="${tarea.estado}">Presentada</label></td>
        <td><a href="#" id="${tarea.id}" class="btn btn-danger btn-sm delete">X</td>
        ` 
       await list.appendChild(row); 
    
  }


  function doneBook(al) {

      
    if(al.classList.contains('success') && al.parentElement.parentElement.style.background == "rgb(118, 224, 85)") 
    {
       
       al.parentElement.parentElement.style.background="none";

     
    } 
    else {
    al.parentElement.parentElement.style.background="rgb(118, 224, 85)";
      
    
     }

  }


  function deleteBook(el) {

    if(el.classList.contains('delete')) {

     //   let x = confirm("¿Estás seguro/a de que quieres eliminarlo?");
     //   if (confirm == true) { 
     //   x =  el.parentElement.parentElement.remove();
     // }
     // if ( confirm == false) {
     //   returndefault ;
     // }
   
     el.parentElement.parentElement.remove();
    }

 
   }

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


   function count(){

      let z=1;
      let yes= z++;
      console.log(yes);
   
    
  }
       
 
  

  // Event: Remove a Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    
    
    // check mark Done from UI
     doneBook(e.target);
     
     
   
     //console.log(e.target);

     
    
    // Remove book from UI
    deleteBook(e.target);

    

  
    });
     
  

    console.log(await Categoria.getListadoCategorias());
    // Borrar una tarea
      let idTarea = 2;
      Tarea.borrarTarea(idTarea);


        Categoria.getListadoCategorias();
        console.log(Categoria.getListadoCategorias);
     
function truncateString(str, num) {
  if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr ;
  } else {
      return str;
  }
}