// La intecion de este proyecto es la creacion de un sistema de control de inventarios y turnos de empleados.
// Su objetivo principal es que un empleado al ingresar al turno sea registrado y mas adelante se puedan registar las materias primas utilizadas

let nombreEmpleado, apellidoEmpleado, fecnacEmpleado, usuarioEmpleado, contrasenaEmpleado;
let horarioLlegada, diaTrabajado, anioIngresoEmpleado
//const empleados = []
const empleados = [
    {
        nombre:"Jorge",
        apellido:"Makk", 
        anioNacimiento: 1970,
        aniosAntiguedad: 32,
        anioIngresoEmpleado: 2002,
        usuario: "jamakk",
        contrasena: "Milanesa123"
    },
    {
        nombre:"Jose",
        apellido:"Makk", 
        anioNacimiento: 1940,
        aniosAntiguedad: 64,
        anioIngresoEmpleado: 1975,
        usuario: "jmakk",
        contrasena: "Paty1"
    },
    {
        nombre:"Elizabeth",
        apellido:"Llanos", 
        anioNacimiento: 1975,
        aniosAntiguedad: 28,
        anioIngresoEmpleado: 2020,
        usuario: "ellanos",
        contrasena: "Canelones"
    }
]
//Carga de datos - Conversion a str
usuarioIngresado = prompt("¿Cual es su nombre de usuario?");
contrasenaIngresado = prompt("Ingrese su contraseña")
for (let m=1; m=3;i++){
    let posicionEnObjeto
    posicionEnObjeto = empleados.indexOf(usuario=usuarioEmpleado)
    contrasenaEmpleado = empleados[posicionEnObjeto+1].contrasena
    for (let i=1;i=3;i++){
        if ((i=1)&&(contrasenaEmpleado != contrasenaIngresado)){
            contrasenaIngresado = prompt("La contraseña ingresada es incorrecta. Por favor ingresela nuevamente")
        }
        if (contrasenaEmpleado=contrasenaIngresado){
            alert("Usuario y contraseña son correctos. Enhorabuena! Usted ha iniciado sesión")
            break;
        }
        if ((i=3) && (contrasenaEmpleado != contrasenaIngresado)){
            alert("Ups! Ya ingresado 3 intentos insatisfactorios. Por favor contactese con el administrados para reestablecer su contraseña")
            break;
        }
    }
}
anioNacimientoUsuario="2002"
let edadUsuario = 2022 - anioNacimientoUsuario;
console.log("La edad del usuario es: "+edadUsuario);

// Usuarios conectados
console.log("Usuario activo: "+usuarioEmpleado)
console.log("Ultima vez consultado: "+new Date().toLocaleTimeString())

//Control de inventarios
let articuloIngresado, cantUnidadesUsadas, totalUnidades
articuloIngresado = parseInt(prompt("Ingrese el codigo de articulo que utilizó en su turno"))
cantUnidadesUsadas = parseInt(prompt("¿Cuantos componentes ha utilizado?"))

//Ingreso de unidades
//Registro de unidades en caso de re-stock. Control a cargo del empleado de turno.
let cantUnidadesIngresadas = parseInt(prompt("¿Cuantas unidades se han ingresado al warehouse?"))

//Idealmente en un futuro, existiria una lista de codigos de articulos cargados
let articulo=inventarios
function cantArticulosTotal(articuloIngresado) {
    while (articuloIngresado==articulo){
        totalUnidades = totalUnidades - cantUnidadesUsadas
        totalUnidades = totalUnidades + cantUnidadesIngresadas
        return totalUnidades
    }
    for (i=1;i=5;i++){
        if (articuloIngresado!=articulo){
            alert("El codigo de articulo ingresado no coincide con el inventario. Intente de nuevo por favor")
            articuloIngresado = prompt("Codigo articulo buscado")
        }
        if(i>4){
            alert("Se recomienda revisar los manuales de codigos de producto. Intente mas tarde")
        }
    }
}
console.log("Actualmente hay "+totalUnidades+" unidades disponibles de articulo "+articulo);
let nombreArt, porcentajeInflacionMes

class inventarioTotal {
    constructor(id, nombre, precio) {
        this.id = parseInt(articulo);
        this.nombre = nombreArt.toUpperCase();
        this.disponible = true;
        this.cantStock = parseInt(totalUnidades);
    }
    actualizacionInflacion(){
        this.precio = this.precio * (1+porcentajeInflacionMes)
    }
}
const inventarios = [];
inventarios.push(new inventarioTotal("1010", "Valvula Rosca", 45));
inventarios.push(new inventarioTotal("1020", "Valvula Presion", 80));
inventarios.push(new inventarioTotal("3030", "Cierre hidraulico", 200));

for (const inventario of inventarios)
    inventario.actualizacionInflacion();
