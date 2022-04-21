let nombre, apellido, fecnac;
let nombreCompleto = nombre + " " + apellido; 

//Carga de datos - Conversion a str
nombre = prompt("Ingresa tu nombre");
apellido = prompt("Ingresa tu Apellido");

// Msg 4 Dev
console.log("Variables en JS");
console.log("El nombre completo es "+nombreCompleto);

let anioNacimiento = parseInt(prompt("Ingrese anio de nacimiento")); //parse to str
console.log(nombre + " nacio en " + anioNacimiento);

let edadUsuario = 2022 - anioNacimiento;
console.log("La edad del usuario es: "+edadUsuario);

// Alert - Salida de datos
alert("Usuario activo: "+nombre)