
import Auth from './firmasimply/Modules/Auth/Auth.js';
import Tarea from './firmasimply/Modules/Tarea.js';
import Categoria from './firmasimply/Modules/Categoria.js';

// const tareasArray = listadoTareas  || [];
let infoCoder = Auth.getCoder()
let emailUser = document.getElementById('usuario');
 emailUser.innerHTML = infoCoder.name;

async function getListadoTareas(){
  //
  //Tarea.getListadoTareas();
}

  
  // Event: Add a Book
  document.querySelector('#editsubmit').addEventListener('click', crearTarea, false )

  async function crearTarea(e) {
    e.preventDefault();
    // Prevent actual submit
    
    

    let nombre = document.querySelector('#nombre').value;
    let categoria = document.querySelector('#categoria ').value;
    let descripcion = document.querySelector('#descripcion').value;
    let fecha = new Date();

    let tarea = {
      nombre: nombre,
      descripcion: descripcion,                //'Lorem Ipsum',
      fecha:fecha,
      estado: 0,                              // 0 pendiente, 1 completada
      user_id: Auth.getCoder().id,           // esta funcion devuelve el id del coder logeado
      categoria_id: 1,
  };

  //Tarea.crearTarea(tarea);
  
    // Validate
    if(nombre  === '' || categoria === '' || descripcion === '' || fecha === ''  ) {
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

 function addtareaToList(tarea) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${tarea.nombre}</td>
      <td>${tarea.categoria}</td>  
      <td>${tarea.descripcion}</td>
      <td>${tarea.fecha}</td>
      <td> <a href="#" class="btn btn-danger btn-sm delete">X</a> </td>
      <td> <button id="add" class="success "> &#10004; </button> </td>
    `;
    //<td> <a href="#" class="btn btn-success btn-sm success success2 ">&#10004;</a> </td>
    //<td> <button onclick="guardarLocalStorage(${tarea.id})" class="btn btn-success btn-sm success">&#10004;</button> </td>
    //<td> <button id="add" class="success "> &#10004; </button> </td>
    list.appendChild(row);
    
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
    document.querySelector('#categoria').value = '';
    document.querySelector('#descripcion').value = '';
  }


   function count(){

      let z=1;
      let yes= z++;
      console.log(yes);
   
    
  }
       
 
    // Book Class: Represents a Book
// class Book {
//     constructor(nombre, categoria, descripcion,   fecha) {
//       this.nombre = nombre;
//       this.categoria  = categoria ;
//       this.descripcion = descripcion;
// 	    this.fecha = fecha;
//     }
//   }
  
  


  // Store Class: Handles Storage

  // class Store {
  //   static getBooks() {
  //     let books;
  //     if(localStorage.getItem('books') === null) {
  //       books = [];
  //     } else {
  //       books = JSON.parse(localStorage.getItem('books'));
        
      
  //     }
  
  //     return books;
  //   }
  
  //   static addBook(book) {
  //     const books = Store.getBooks();
  //     books.push(book);
      
      
  //     localStorage.setItem('books', JSON.stringify(books));
     
      
  //   } 


  
  //   static removeBook(fecha) {
  //     const books = Store.getBooks();
  
  //     books.forEach((book, index) => {
  //       if(book.fecha === fecha) {
  //         books.splice(index, 1);
  //       }
  //     });
  
  //     localStorage.setItem('books', JSON.stringify(books));
     
  //   }

    
  // }
  
  // Event: Display Books
  // document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
 
  

  // Event: Remove a Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    
    
    // check mark Done from UI
     doneBook(e.target);
     
     
   
     //console.log(e.target);

     
    
    // Remove book from UI
    deleteBook(e.target);

    
    
   // Show success message
  // UI.showAlert('Tarea eliminada', 'info');
    
  
    });
     
  


    // Borrar una tarea
      let idTarea = 2;
      Tarea.borrarTarea(idTarea);

      // Marcar una tarea como completada o pendiente  // 1 completada, 0 pendiente
        //  idTarea = 2;
        // let data = { estado: 1 };               
        // Tarea.marcarTarea(data, idTarea);
          

        Categoria.getListadoCategorias();