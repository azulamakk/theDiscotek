
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

let lugarParaTabla = document.getElementById("inferior");
lugarParaTabla.appendChild(tabla);
let articulo = inventarioTotal.indexOf(id)

//Mediante la siguiente funcion se busca el calculo de las unidades en stock

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

function renderizarProductos(){
    const URLGet = "/discos.json"
    fetch(URLGet)
        .then(resultado => resultado.json())
        .then(data =>{
            let discos=data.discos;
            console.log(discos);
            discos.forEach(disco => {
                document.getElementById("discos").innerHTML+= `<li class="col-sm-3 list-group-item">
                <h3> Album: ${disco.nombre}</h3>
                <p> Artista: ${disco.artista}</p>
                <img src="${disco.img}"></img>
                <button class='btn btn-danger' id='btn${disco.id}'>Comprar</button>
                </li>`;
            });
        })
}

function agregarAlCarrito(discoNuevo) {
    carrito.push(discoNuevo);
    console.log(carrito);
    alert("articulo: " + discoNuevo.nombre + " se ha registrado")
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${discoNuevo.id}</td>
        <td>${discoNuevo.nombre}</td>
        <td>${discoNuevo.artista}</td>
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