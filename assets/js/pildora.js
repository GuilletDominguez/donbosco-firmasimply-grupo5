function crearpildora(){
    location.href = "formulario-pildoras.html";
}
function eliminarPildora(){
    const elem = document.getElementById('lista');
    elem.style.backgroundColor='red';
    console.log("kkade ekfjaselkjf");
    if (window.confirm("¿Estás seguro que deseas eliminar la píldora seleccionada?")) {
        let seleccionado = document.getElementById("selec");
        if (seleccionado.nodeValue == 'true'){
            alert("Píldora eliminada");
        }else{
            alert("no ha pasado nada");
        }   
    }
}
