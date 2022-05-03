// La intecion de este proyecto es la creacion de un sistema de control de inventarios y turnos de empleados.
// Su objetivo principal es que un empleado al ingresar al turno sea registrado y mas adelante se puedan registar las materias primas utilizadas

let nombreEmpleado, apellidoEmpleado, fecnacEmpleado, usuarioEmpleado, contrasenaEmpleado;
let horarioLlegada, diaTrabajado

usuarioEmpleado="amakk"
contrasenaEmpleado="Canelones123"
//Carga de datos - Conversion a str
usuarioIngresado = prompt("¿Cual es su nombre de usuario?");
contrasenaIngresado = prompt("Ingrese su contraseña")

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

anioNacimientoUsuario="2002"
let edadUsuario = 2022 - anioNacimientoUsuario;
console.log("La edad del usuario es: "+edadUsuario);

// Usuarios conectados
console.log("Usuario activo: "+usuarioEmpleado)
console.log("Ultima vez consultado: "+new Date().toLocaleTimeString())

//Control de inventarios
let articulo, cantUnidades, totalUnidades
articulo = parseInt(prompt("Ingrese el codigo de articulo que utilizó en su turno"))
cantUnidades = parseInt(prompt("¿Cuantos componentes ha utilizado?"))

totalUnidades = totalUnidades - cantUnidades
