function crearpildora(){
    location.href = "formulario-pildoras.html";
}
function eliminarPildora(){
    const elem = document.getElementById('lista');
    elem.style.backgroundColor='red';
    if (window.confirm("¿Estás seguro que deseas eliminar la píldora seleccionada?")) {
        let seleccionado = document.getElementById("selec");
        if (seleccionado.nodeValue == 'true'){
            alert("Píldora completada");
        }else{
            alert("No se han realizado cambios");
        }   
    }
}
var li = document.getElementsByClassName("list-group-item").length;
console.log("Hay " + li + " li en total");

function suma (){
    let sum = li + 2;
    document.querySelector(".pildorasTotales").innerHTML = sum;
  };

  suma();