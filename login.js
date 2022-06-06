//Declaracion de empleados
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
let usuario
function validar() {
    var usuario = document.getElementById("usuario");
    var constrasenia = document.getElementById("contrasenia");
    if(usuario==empleados.usuario){
        for (empleado of empleados){
            if (empleado.constrasena == empleados.constrasenia){
                alert("Usuario y contraseña validos")
            }
            else{
                alert("Usuario o contraseña invalidos. Intente nuevamente")
            }
        }
    }
}