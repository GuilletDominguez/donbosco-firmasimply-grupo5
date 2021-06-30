
let yes;
window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title:{
      text: "Estadísticas"
    },
    axisY: {
      title: "Semana"
    },
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      legendText: "tarea",
      dataPoints: [      
         { y: 1, y:20, label: "completad'"  },
         { y: 70, y:40, label: "pendiente" }
       
      
  ]

  }]
});
  chart.render();
  
  }
       
           
      
    // Book Class: Represents a Book
class Book {
    constructor(nombre, categoria, descripcion,   fecha) {
      this.nombre = nombre;
      this.categoria  = categoria ;
      this.descripcion = descripcion;
	    this.fecha = fecha;
    }
  }
  
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#book-list');
  
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${book.nombre}</td>
        <td>${book.categoria}</td>  
        <td>${book.descripcion}</td>
        <td>${book.fecha}</td>
        <td> <a href="#" class="btn btn-danger btn-sm delete">X</a> </td>
        <td> <a href="#" class="btn btn-success btn-sm success ">&#10004;</a> </td>
      `;
 //<td> <button id="add" class="success "> &#10004; </button> </td>
      list.appendChild(row);
      
    }

  
    static doneBook(al) {
     if(al.classList.contains('success')) {
          // row.style.background="green";
          let y= al.parentElement.parentElement;
          y.style.background="#76e055";
         
      
          //  var number = 1;
          //  number++;
          //  console.log(number);
          


          // var number = 0;

          // for (var i = 0; i < 5; i++) {
          //     number++;
          //     console.log(number);
          // }
     
        }

    }
      
   

      
    

    static deleteBook(el) {

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


     static showAlert(message, className) {
       const div = document.createElement('div');
       div.className = `alert alert-${className}`;
       div.appendChild(document.createTextNode(message));
      
      
       const container = document.querySelector('.container');
       const form = document.querySelector('#flexbox');
       container.insertBefore(div, form); 

      // Vanish in 3 seconds
       setTimeout(() => document.querySelector('.alert').remove(), 3000);
     }
	
    static clearFields() {
      document.querySelector('#nombre').value = '';
      document.querySelector('#categoria').value = '';
      document.querySelector('#descripcion').value = '';
    }


    static count(){
      let z=1;
       yes= z++;
      console.log(yes)
    }


      
  }
  
  // Store Class: Handles Storage

  class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));

        
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);

      
      localStorage.setItem('books', JSON.stringify(books));
      
    } 

  
    //  static savecolor(fecha) {
    //    const books = Store.getBooks();
  
    //   books.forEach((book, index) => {
    //      if(book.fecha === fecha) {
    //        books.splice(index, 1);
    //    }
    //    });
  
    //    localStorage.setItem('books', JSON.stringify(books));
     
    //  }

  
    static removeBook(fecha) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.fecha === fecha) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
     
    }

    
  }
  

  // Event: Display Books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  

  
  // Event: Add a Book
  document.querySelector('#book-form').addEventListener('submit', (e) => {

    
  
    // Prevent actual submit
    e.preventDefault();

    
    
	
    // Get form values
    const nombre = document.querySelector('#nombre').value;
    const categoria = document.querySelector('#categoria ').value;
    const descripcion = document.querySelector('#descripcion').value;
    const fecha = new Date();
  
    // Validate
    if(nombre  === '' || categoria === '' || descripcion === '' || fecha === ''  ) {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      // Instatiate book
      const book = new Book(nombre , categoria , descripcion , fecha );

   
      // Add Book to UI
      UI.addBookToList(book) 

   
       // count
      UI.count();
        
    
      // Add book to store
      Store.addBook(book);
  



      // Show success message
      // UI.showAlert('Tarea añadido', 'success');
  
      // Clear fields
      UI.clearFields();
    }
  });
  
  // Event: Remove a Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    
    
    // check mark Done from UI
    
     UI.doneBook(e.target);
     
     
   
     //console.log(e.target);

    // Store.savecolor(e.target.parentElement.parentElement.previousElementSibling);
     
    
    // Remove book from UI
    UI.deleteBook(e.target);

    
    

    
    // Remove book from store
      Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

     
  
    // Show success message
    // UI.showAlert('Tarea eliminada', 'info');
  });

  // var list = document.querySelector('#book-list');
  // list.addEventListener('click', function(ev) {
  //   if (ev.target.tagName === 'TD') {
  //     ev.target.classList.toggle('checked');
  //   }
  // }, false);


