// La intecion de este proyecto es la creacion de un sistema de control de inventarios y turnos de empleados.
// Su objetivo principal es que un empleado al ingresar al turno sea registrado y mas adelante se puedan registar las materias primas utilizadas

//DOM
console.dir(document.body.children);

//getElementById
let seccion=document.getElementById("principal");
console.log(seccion.innerHTML);

let titulo=document.getElementById("titulo");
titulo.innerText="Control de stocks";
titulo.style.font="bold 40px merriweather";

//getElementsByTagName
let parrafos=document.getElementsByTagName("p");
console.log(parrafos);
console.log(parrafos[1].innerHTML);

parrafos[0].innerText=new Date().toLocaleString();

let labels1=document.getElementsByTagName("label");

let boton=document.getElementById("boton");

//Declaramos los articulos del inventario

let articuloIngresado, cantUnidadesUsadas, totalUnidades
articuloIngresado = parseInt(document.getElementById("idArticulo"));

//Capturamos las cantidades utilizadas en la jornada
let scantUnidadesUsadas=document.getElementById("cantidadUtilizadas");
let cantUnidadesIngresadas = parseInt(document.getElementById("cantidadIngresada"))

//Tabla con DOM: permitira visualizar el id del articulo, su nombre y las unidades disponibles
let tabla=document.createElement("table");
tabla.className="table table-striped";
let tablaBody = document.createElement("tbody");

for(const inventario of inventarios){
    let fila=document.createElement("tr");
    fila.innerHTML=`
        <td>${inventario.id}</td>
        <td>${inventario.nombre}</td>
        <td>${inventario.totalUnidades}</td>`;
    tablaBody.appendChild(fila);
}

tabla.appendChild(tablaBody);

let lugarParaTabla=document.getElementById("inferior");
lugarParaTabla.appendChild(tabla);
let articulo = inventarioTotal.indexOf(id)

//Mediante la siguiente funcion se busca el calculo de las unidades en stock
function cantArticulosTotal(articuloIngresado) {
    while (articuloIngresado == inventarios.id) {
        inventarios.totalUnidades = inventarios.totalUnidades - cantUnidadesUsadas
        inventarios.totalUnidades = inventarios.totalUnidades + cantUnidadesIngresadas
        return inventarios.totalUnidades
    }
    for (i = 1; i = 5; i++) {
        if (articuloIngresado != articulo) {
            alert("El codigo de articulo ingresado no coincide con el inventario. Intente de nuevo por favor")
            articuloIngresado = prompt("Codigo articulo buscado")
        }
        if (i > 4) {
            alert("Se recomienda revisar los manuales de codigos de producto. Intente mas tarde")
        }
    }
}
// Carrito
let carritoDeJornada = []
let list=document.getElementById("miLista")

// Dark mode
const toggleButton = document.getElementById('toggle-button')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('dark')
  })

sessionStorage.clear()
