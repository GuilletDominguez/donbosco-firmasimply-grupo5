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

let logOut = document.getElementById('logOut');
let alerta = document.getElementById('alerta')
let confirmar = document.getElementById('confirmar')

logOut.addEventListener('click',  () =>{


 
    
   
   
});

confirmar.addEventListener('click', ()=>{
    
  // const logOutUser = JSON.parse(localStorage.getItem('token'));
  // logOutUser.forEach((token, index) => {
  //   if(token.token === token){
  //   logOutUser.splice(index, 1)
  //   }
  // });
  // localStorage.setItem('token',JSON.stringify(logOutUser));
  $('#sidebar').removeClass('active');
  $('.overlay').removeClass('active');
  alerta.innerHTML = `<div class="alert alert-success alert-dismissable">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  Has cerrado sesión con éxito, vuelve pronto!
</div>`

  setTimeout(
    function(){
        window.location.href = "../index.html";
    }, 3000);

}); 