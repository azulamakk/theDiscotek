// La intecion de este proyecto es la creacion de un sistema de control de inventarios y turnos de empleados.
// Su objetivo principal es que un empleado al ingresar al turno sea registrado y mas adelante se puedan registar las materias primas utilizadas

//DOM
console.dir(document.body.children);

//getElementById
let seccion=document.getElementById("principal");
console.log(seccion.innerHTML);

seccion.style.background="cream";

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

// Dark mode
function activarDark(){
    if (boton.innerText="Light Mode"){
        seccion.style.background="white";
        titulo.style.color="grey";
        for(const parrafo of parrafos){
            parrafo.style.color="grey";
        }
        for(const lab of labels1){
            lab.style.color="white";
        }
        boton.innerText="Dark Mode";
    }
    if (boton.innerText="Dark Mode"){
    seccion.style.background="grey";
    titulo.style.color="white";
    for(const parrafo of parrafos){
        parrafo.style.color="white";
    }
    for(const lab of labels1){
        lab.style.color="white";
    }
    boton.innerText="Light Mode";
    }
}

//nuestro array de objetos literales
const inventario= [{ id: 1010,  nombre: "Tuerca", totalUnidades:300 },
                  {  id: 1020,  nombre: "Valvula presion", totalUnidades:58 },
                  {  id: 3030,  nombre: "Perno"  , totalUnidades: 49 },
                  {  id: 5050,  nombre: "Valvula rosca" , totalUnidades: 74 }
];

let articuloIngresado, cantUnidadesUsadas, totalUnidades
articuloIngresado = parseInt(document.getElementById("idArticulo"));

//insertar textos enn inputs

let scantUnidadesUsadas=document.getElementById("cantidadUtilizadas");
let cantUnidadesIngresadas = parseInt(document.getElementById("cantidadIngresada"))

//tabla con DOM
let tabla=document.createElement("table");
tabla.className="table table-striped";
let tablaBody = document.createElement("tbody");

for(const inventar of inventario){
    let fila=document.createElement("tr");
    fila.innerHTML=`
        <td>${inventario.id}</td>
        <td>${inventario.nombre}</td>
        <td>${inventario.precio}</td>`;
    tablaBody.appendChild(fila);
}

tabla.appendChild(tablaBody);

let lugarParaTabla=document.getElementById("inferior");
lugarParaTabla.appendChild(tabla);

// Declaracion de empleados
let nombreEmpleado, apellidoEmpleado, usuarioEmpleado, contrasenaEmpleado;
let horarioLlegada, diaTrabajado, anioIngresoEmpleado, edadUsuario;
//Carga de datos 
let usuarioIngresado, contrasenaIngresado
//usuarioIngresado = prompt("¿Cual es su nombre de usuario?");
//contrasenaIngresado = prompt("Ingrese su contraseña");
//for (let m = 1; m = 3; i++) {
//    let posicionEnObjeto
//    posicionEnObjeto = empleados.indexOf(usuario = usuarioEmpleado)
//    contrasenaEmpleado = empleados[posicionEnObjeto].contrasena
//    edadUsuario = 2022 - empleados[posicionEnObjeto].anioNacimiento
//    for (let i = 1; i = 3; i++) {
//        if ((i = 1) && (contrasenaEmpleado != contrasenaIngresado)) {
//            contrasenaIngresado = prompt("La contraseña ingresada es incorrecta. Por favor ingresela nuevamente")
//        }
//      if (contrasenaEmpleado = contrasenaIngresado) {
//            alert("Usuario y contraseña son correctos. Enhorabuena! Usted ha iniciado sesión")
//            break;
//        }
//        if ((i = 3) && (contrasenaEmpleado != contrasenaIngresado)) {
//            alert("Ups! Ya ingresado 3 intentos insatisfactorios. Por favor contactese con el administrados para reestablecer su contraseña")
//            break;
//        }
//    }
//}
//console.log("La edad del usuario es: " + edadUsuario);

// Usuarios conectados
//console.log("Usuario activo: " + usuarioEmpleado)
//console.log("Ultima vez consultado: " + new Date().toLocaleTimeString())

//Control de inventarios


//Ingreso de unidades
//Registro de unidades en caso de re-stock. Control a cargo del empleado de turno.

//Idealmente en un futuro, existiria una lista de codigos de articulos cargados
let articulo = inventarioTotal.indexOf(id)

function cantArticulosTotal(articuloIngresado) {
    while (articuloIngresado == articulo) {
        totalUnidades = totalUnidades - cantUnidadesUsadas
        totalUnidades = totalUnidades + cantUnidadesIngresadas
        return totalUnidades
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
//const empleados = []
const empleados = [{
    nombre: "Jorge",
    apellido: "Makk",
    anioNacimiento: 1970,
    aniosAntiguedad: 32,
    anioIngresoEmpleado: 2002,
    usuario: "jamakk",
    contrasena: "Milanesa123"
},
{
    nombre: "Jose",
    apellido: "Makk",
    anioNacimiento: 1940,
    aniosAntiguedad: 64,
    anioIngresoEmpleado: 1975,
    usuario: "jmakk",
    contrasena: "Paty1"
},
{
    nombre: "Elizabeth",
    apellido: "Llanos",
    anioNacimiento: 1975,
    aniosAntiguedad: 28,
    anioIngresoEmpleado: 2020,
    usuario: "ellanos",
    contrasena: "Canelones"
}
]

// Declaracion de articulos
console.log("Actualmente hay " + totalUnidades + " unidades disponibles de articulo " + articulo);
let nombreArt, porcentajeInflacionMes
