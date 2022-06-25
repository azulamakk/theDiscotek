
// El siguiente codigo responde a la seccion productos, carga de cards y carrito

//Declaracion de variables
const $header = document.querySelector(".header__nav");
const $contenedorProductos = document.querySelector(".productos-contenedor");
const $fragment = document.createDocumentFragment();
const $template = document.querySelector(".template-productos").content;
const $templateFooter = document.querySelector(".template-footer").content;
const $templateCarrito = document.querySelector(".template-carrito").content;
const $items = document.querySelector("#articulos-tabla");
const $footer = document.querySelector("#footer-tabla");
const $carritoContador = document.querySelector(".carrito-contador");
const $buscador = document.querySelector("#buscador");


let carritoDeCompra = JSON.parse(localStorage.getItem("carrito")) || {};

document.addEventListener("DOMContentLoaded", () => {
  llamarProductos();
});

//Carga de productos. Fetch a los datos cagados en productos.json
const llamarProductos = () => {
  fetch("./productos.json")
    .then((res) => res.json())
    .then((productos) => cargarProductos(productos))
    .catch((err) => {
      console.log(`Error ${err}`);
    });   
};

//Carga de productos en cards
const cargarProductos = (productos) => {
  productos.forEach((producto) => {
    $template.querySelector("h3").textContent = producto.nombre;
    $template.querySelector("p").textContent = producto.precio;
    $template.querySelector("button").dataset.id = producto.id;
    $template.querySelector("img").setAttribute("src", producto.img);

    const clon = $template.cloneNode(true);
    $fragment.appendChild(clon);
  });
  $contenedorProductos.appendChild($fragment);
};

//Boton de añadir al carrito
$contenedorProductos.addEventListener('click', (e) => {
  agregarArticulo(e);
  e.stopPropagation();
});

const agregarArticulo = (e) => {
  if (e.target.classList.contains("btn")) {
    agregarACarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

//Carga de informacion de producto seleccionado al carrito
const agregarACarrito = (carrito) => {
  const articulo = {
    id: carrito.querySelector(".btn").dataset.id,
    nombre: carrito.querySelector("h3").textContent,
    precio: carrito.querySelector("p").textContent,
    cantidad: Number(carrito.querySelector("input").value),
    img: carrito.querySelector("img").src,
  };
  if (carritoDeCompra.hasOwnProperty(articulo.id)) {
    const cantidad = Number(carrito.querySelector("input").value);
    articulo.cantidad = carritoDeCompra[articulo.id].cantidad + cantidad;
  }
  carritoDeCompra[articulo.id] = { ...articulo };
  renderizarCarrito();
};

//Renderizacion del carrito
const renderizarCarrito = () => {
  $items.innerHTML = "";
  Object.values(carritoDeCompra).forEach((articulo) => {
    $templateCarrito.querySelector("img").setAttribute("src", articulo.img);
    $templateCarrito.querySelectorAll("td")[1].textContent = articulo.nombre;
    $templateCarrito.querySelectorAll("td")[2].textContent = articulo.cantidad;
    $templateCarrito.querySelector(".btn-carrito-agregar").dataset.id =
      articulo.id;
    $templateCarrito.querySelector(".btn-carrito-eliminar").dataset.id =
      articulo.id;
    $templateCarrito.querySelector("span").textContent =
      articulo.cantidad * articulo.precio;

    const clon = $templateCarrito.cloneNode(true);
    $fragment.appendChild(clon);
  });
  $items.appendChild($fragment);
  renderizarFooter();
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompra));
};

const renderizarFooter = () => {
  $footer.innerHTML = "";
  if (Object.keys(carritoDeCompra).length === 0) {
    $footer.innerHTML = `
            <th scope="row" colspan="5">Personalizate</th>
            `;
    return;
  }
  const totalCarritoCantidades = Object.values(carritoDeCompra).reduce(
    (acum, { cantidad }) => acum + cantidad,
    0
  );
  const totalCarritoPrecio = Object.values(carritoDeCompra).reduce(
    (acum, { cantidad, precio }) => acum + cantidad * precio,
    0
  );
  $carritoContador.textContent = totalCarritoCantidades;
  $templateFooter.querySelectorAll("td")[1].textContent =
    totalCarritoCantidades;
  $templateFooter.querySelector("span").textContent = totalCarritoPrecio;

  const clon = $templateFooter.cloneNode(true);
  $fragment.appendChild(clon);
  $footer.appendChild($fragment);

  document.querySelector("#vaciar-carrito").onclick = vaciarCarrito;

  const $btnComprar = document.querySelector(".realizar");
  $btnComprar.addEventListener('click', (e) => {
    const okCompra = confirm("Confirma Compra?");
    if (okCompra) {
      swal("Muchas gracias", "por tu compra!", "success");
      vaciarCarrito();
    }
  });
};

//Boton de vaciar carrito
const vaciarCarrito = () => {
  carritoDeCompra = {};
  $carritoContador.textContent = ``;
  renderizarCarrito();
};

$items.addEventListener('click', (e) => {
  btnAumentarOdisminuir(e);
});

//Aumento o disnucion de porductos una vez en el carrito
const btnAumentarOdisminuir = (e) => {
  const articulo = carritoDeCompra[e.target.dataset.id];
  if (e.target.classList.contains("btn-carrito-agregar")) articulo.cantidad++;
  if (e.target.classList.contains("btn-carrito-eliminar")) {
    articulo.cantidad--;
    !articulo.cantidad && delete carritoDeCompra[e.target.dataset.id];
  $carritoContador.textContent = ``;
  }
  renderizarCarrito();
  e.stopPropagation();
};

window.onscroll = function() {elementoSticky()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function elementoSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//El siguiente codigo apunta a poder validar correctamente los datos ingresados en la seccion contacto

//Linkeando con el DOM
const campoNombre = document.getElementById('nombre')
const campoNumber = document.getElementById('telefono')

const form = document.getElementById('form')
form.addEventListener('submit', function (event) {

    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'No se ha introducido un correo electrónico';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'El valor insertado no es valido';
    } else if (email.validity.tooShort) {
        emailError.textContent = `El correo electronico es muy corto. Reviselo antes de hacer el envío.`;
    }

    emailError.className = 'error activo';
}

campoNombre.oninput = () => {
    if (!isNaN(campoNombre.value)) {
        campoNombre.style.color = 'red'
        Swal.fire({
            title: 'ERROR',
            text: 'Nombre invalido. Por favor intente nuevamente',
            icon: 'error',
            confirmButtonText: 'Gracias'
        })
    } else {
        campoNombre.style.color = 'black'
        Swal.fire({
            title: 'Correcto',
            text: 'Nombre válido!',
            icon: 'success',
            confirmButtonText: 'Gracias'
        })
    }
}

const formulario = document.getElementById("form")
formulario.addEventListener("submit", validarFormulario)

function validarFormulario(ev) {
    if ((isNaN(campoNumber.value))(campoNombre.value == "")) {
        ev.preventDefault()
        Swal.fire(
            'Debe ingresar datos válidos'
        )
    }
}