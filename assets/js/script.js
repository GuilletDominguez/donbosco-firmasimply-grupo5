$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

let alerta = document.getElementById('alerta')
let confirmar = document.getElementById('confirmar')
confirmar.addEventListener('click', ()=>{
    
  // const logOutUser = JSON.parse(localStorage.getItem('body'));
  // logOutUser.forEach((token, index) => {
  //   if(token._token === token){
  //   logOutUser.splice(index, 1)
  //   }
  // });
  // localStorage.setItem('token',JSON.stringify(logOutUser));
  $('#sidebar').removeClass('active');
  $('.overlay').removeClass('active');
  alerta.innerHTML = `<div class="alert alert-success alert-dismissable">

  Has cerrado sesión con éxito, vuelve pronto!
</div>`

  setTimeout(
    function(){
        window.location.href = "../index.html";
    }, 3000);

}); 

function getCita(){
    let quitaFallos = jQuery.noConflict();
   quitaFallos.getJSON("https://raw.githubusercontent.com/GuilletDominguez/myBookList/master/citas.json", 
       function(json){
         let htmlCita = "", htmlAutor = "";
         let citaAleatoria = Math.floor(Math.random() * json.length); 
         htmlCita += json[citaAleatoria].cita;
         htmlAutor += json[citaAleatoria].autor;  
            $("#cita").html(htmlCita);
         $("#autor").html(htmlAutor);
      
    });
 }
 
 
 getCita();
 
 $(document).ready(function () {
   $('#get-cita').click(function () {
      getCita();
   });
 });