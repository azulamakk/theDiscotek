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
}]


let registrar = document.getElementById("btnCargaFinalizada")
registrar.innerText = "Ingresar";

var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = "index.html"
}

function login() {
  const usuario = document.getElementById("usuario").value;
  const contrasenia = document.getElementById("contrasenia").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.mecallapi.com/api/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "usuario": usuario,
    "contrasenia": contrasenia
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['status'] == 'ok') {
        localStorage.setItem("jwt", objects['accessToken']);
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "index.html";
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}