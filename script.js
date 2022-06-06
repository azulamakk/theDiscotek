// La intecion de este proyecto es la creacion de un sistema de control de inventarios y turnos de empleados.
// Su objetivo principal es que un empleado al ingresar al turno sea registrado y mas adelante se puedan registar las materias primas utilizadas

//DOM
console.dir(document.body.children);

//getElementById
let seccion = document.getElementById("principal");
console.log(seccion.innerHTML);

let titulo = document.getElementById("titulo");
titulo.innerText = "Control de stocks";

//getElementsByTagName
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
console.log(parrafos[1].innerHTML);

parrafos[0].innerText = new Date().toLocaleString();

let labels1 = document.getElementsByTagName("label");

let boton = document.getElementById("boton");

//Declaramos los articulos del inventario

let articuloIngresado, totalUnidades
articuloIngresado = parseInt(document.getElementById("idArticulo"));

//Capturamos las cantidades utilizadas en la jornada
let cantUnidadesUsadas = document.getElementById("cantidadUtilizadas");
let cantUnidadesIngresadas = parseInt(document.getElementById("cantidadIngresada"))

let lugarParaTabla = document.getElementById("inferior");
lugarParaTabla.appendChild(tabla);
let articulo = inventarioTotal.indexOf(id)

document.getElementById("btnRegistroUnidades").addEventListener('click', cantArticulosTotal(articuloIngresado))
//Mediante la siguiente funcion se busca el calculo de las unidades en stock
function cantArticulosTotal(articuloIngresado) {
    for (const inventario of inventarios) {
        while (articuloIngresado == inventarios.id) {
            inventarios.totalUnidades = inventarios.totalUnidades - cantUnidadesUsadas
            inventarios.totalUnidades = inventarios.totalUnidades + cantUnidadesIngresadas
            return inventarios.totalUnidades
        }
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
let list = document.getElementById("miLista")
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    //cargarlos en la tabla-Tarea
} else {
    carrito = [];
}
let lista = document.getElementById("milista");
renderizarProductos();

function renderizarProductos() {
    for (const inventario of inventarios) {
        lista.innerHTML += `<li class="col-sm-3 list-group-item">
        <h3> ID: ${inventario.id} </h3>
        <p> Producto: ${inventario.nombre}</p>
        <p><strong> $ ${inventario.totalUnidades} </strong></p>
        <button class='btn btn-danger' id='btn${inventario.id}'>Comprar</button>
        </li>`;
    }
    //eventos
    inventarios.forEach(inventario => {
        //Evento para cada boton
        document.getElementById(`btn${inventario.id}`).addEventListener('click', function () {
            agregarAlCarrito(inventario);
        });
    });
}

function agregarAlCarrito(inventarioNuevo) {
    carrito.push(inventarioNuevo);
    console.log(carrito);
    alert("articulo: " + inventarioNuevo.nombre + " se ha registrado")
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${inventarioNuevo.id}</td>
        <td>${inventarioNuevo.nombre}</td>
        <td>${inventarioNuevo.totalUnidades}</td>
    </tr>`;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Dark mode
const toggleswitch = document.querySelector('.theme-switch input[type="checkbox"]')
const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
        toggleswitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute("data-theme", 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleswitch.addEventListener('change', switchTheme, false)