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

//Declaramos los articulos del inventario
const inventarios= [{ id: 1010,  nombre: "Tuerca", totalUnidades:300 },
                  {  id: 1020,  nombre: "Valvula presion", totalUnidades:58 },
                  {  id: 3030,  nombre: "Perno"  , totalUnidades: 49 },
                  {  id: 5050,  nombre: "Valvula rosca" , totalUnidades: 74 }
];

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

// Dark mode
function activarDark(){
    if (boton.innerText="Light Mode"){
        seccion.style.background="navy";
        titulo.style.color="white";
        for(const parrafo of parrafos){
            parrafo.style.color="white";
        }
        for(const lab of labels1){
            lab.style.color="white";
        }
        for(const inventario of inventarios){
            inventario.id.style.color="white"
            inventario.id.style.color="white"
            inventario.id.style.color="white"
        }
        boton.innerText="Dark Mode";
    }
    if (boton.innerText="Dark Mode"){
    seccion.style.background="white";
    titulo.style.color="navy";
    for(const parrafo of parrafos){
        parrafo.style.color="navy";
    }
    for(const lab of labels1){
        lab.style.color="white";
    }
    boton.innerText="Light Mode";
    }
}

// Declaracion de empleados
//let nombreEmpleado, apellidoEmpleado, usuarioEmpleado, contrasenaEmpleado;
//let horarioLlegada, diaTrabajado, anioIngresoEmpleado, edadUsuario;
//Carga de datos 
//let usuarioIngresado, contrasenaIngresado
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



sessionStorage.clear()
