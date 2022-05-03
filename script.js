// La intecion de este proyecto es la creacion de un sistema de control de inventarios y turnos de empleados.
// Su objetivo principal es que un empleado al ingresar al turno sea registrado y mas adelante se puedan registar las materias primas utilizadas

let nombreEmpleado, apellidoEmpleado, fecnacEmpleado, usuarioEmpleado, contrasenaEmpleado;
let nombreCompletoEmpleado = nombre + " " + apellido; 
let horarioLlegada, diaTrabajado

//Carga de datos - Conversion a str

for (let i=1;i=3;i++){
    if (i=1){
        usuarioIngresado = prompt("¿Cual es su nombre de usuario?");
        contrasenaIngresado = prompt("Ingrese su contraseña")
    } else {
        contrasenaIngresado = prompt("La contraseña ingresada es incorrecta. Por favor ingresela nuevamente")
    }
    if (contrasenaEmpleado=contrasenaIngresado){
        break;
    }
    if ((i=3) && (contrasenaEmpleado != contrasenaIngresado)){
        alert("Ups! Ya ingresado 3 intentos insatisfactorios. Por favor contactese con el administrados para reestablecer su contraseña")
        break;
    }
}

// Msg 4 Dev
console.log("El nombre completo es "+nombreCompleto);

let anioNacimiento = parseInt(prompt("Ingrese anio de nacimiento")); //parse to str
console.log(nombreCompleto + " nacio en " + anioNacimiento);

let edadUsuario = 2022 - anioNacimiento;
console.log("La edad del usuario es: "+edadUsuario);


// Alert - Salida de datos
alert("Usuario activo: "+usuarioEmpleado)

