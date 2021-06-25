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
let alerta = document.getElementById('content')
let confirmar = document.getElementById('confirmar')

logOut.addEventListener('click',  () =>{

    alerta.innerHTML += `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Confirmación de cierre de sesión</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ¿Estás seguro de que quieres cerrar sesión?
        </div>
        <div class="modal-footer">
          <button id="confirmar" type="button" class="btn btn-secondary" data-dismiss="modal">Sí, quiero salir.</button>
          <button id="cancelar" type="button" class="btn btn-primary" data-dismiss="modal">No, quiero volver.</button>
        </div>
      </div>
    </div>
  </div>`;

    
});