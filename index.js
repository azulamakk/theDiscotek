// Establecemos un vinculo entre los elementos del HTML -DOM- para vincularlos con variables

const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("templateCard").content
const templateFooter = document.getElementById("templateFooter").content
const templateCarrito = document.getElementById("templateCarrito").content
const fragment = document.createDocumentFragment()
let productosCarrito = {}
let discosJSON=[]

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    if (localStorage.getItem("carrito")) {
        productosCarrito = JSON.parse(localStorage.getItem("carrito"))
        completarCarrito()
    }
})

cards.addEventListener("click", e => {
    addCarrito(e)
})

items.addEventListener("click", e => {
    btnAccion(e)
})

function mostrarProductos () {
    // La idea es que aparezcan los productos en el html
    console.log (discosJSON);
    for (const disco of discosJSON) {

        document.querySelector("#contenedorCards").innerHTML += (`<div class="card shadow mt-4 mt-md-0">
        <img src="${disco.img}" alt="tapaDisco" class="card-img-top" />
            <div class="card-body">
                <p>${disco.id}</p>
                <h5>${disco.nombre}</h5>
                <h6>${disco.artista}</h6>
                <p><span>${disco.genero}</span></p>
                <button class="btn btn-dark">Comprar</button>
            </div>
        </div>`);
    }
    printCards(data)
    for (const disco of discosJSON) {
            document.querySelector(`#btn${disco.id}`).onclick= function() {
                agregarAlCarrito(disco);
            };
    }
}

const printCards = data => {
    data.forEach(disco => {
        const {
            id, 
            img,
            nombre,
            artista,
            genero
        } = disco
        templateCard.querySelector('.btn-dark').dataset.id = id
        templateCard.querySelector("img").setAttribute('src', img)
        templateCard.querySelector("h5").textContent = nombre
        templateCard.querySelector("h6").textContent = artista
        templateCard.querySelector("span").textContent = genero

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        e.target.onmouseover = () => {
            e.target.style.backgroundColor = "green"
        }
        Swal.fire({
            title: 'Enhorabuena',
            text: 'Se ha agregado al carrito',
            icon: 'success',
            confirmButtonText: 'Gracias'
        })

        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = obj => {
    const disco = {
        id: obj.querySelector(".btn-dark").dataset.id,
        nombre: obj.querySelector("h5").textContent,
        artista: obj.querySelector("h6").textContent,
        genero: obj.querySelector("span").textContent,
        cantidad: 1
    }
    if (productosCarrito.hasOwnProperty(disco.id)) {
        disco.cantidad = productosCarrito[disco.id].cantidad + 1
    }

    //empujar ahora todo al carrito
    productosCarrito[disco.id] = {
        ...disco
    }
    completarCarrito()
}

const completarCarrito = () => {
    items.innerHTML = ""
    Object.values(productosCarrito).forEach(disc => {
        templateCarrito.querySelector('th').textContent = disc.id
        templateCarrito.querySelectorAll('td')[0].textContent = disc.modelo
        templateCarrito.querySelectorAll('td')[1].textContent = disc.cantidad
        templateCarrito.querySelector('.btn-success').dataset.id = disc.id
        templateCarrito.querySelector('.btn-danger').dataset.id = disc.id
        
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    completarFooter()

    localStorage.setItem("carrito", JSON.stringify(productosCarrito))
}


const completarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(productosCarrito).length === 0) {
        footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío</th>
      `
    }

    const nCantidad = Object.values(productosCarrito).reduce((acc, {
        cantidad
    }) => acc + cantidad, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciarCarrito')
    btnVaciar.addEventListener('click', () => {
        productosCarrito = {}
        completarCarrito()

        Swal.fire({
            title: 'Carrito vaciado',
            text: '¿Que esperas para llenarlo de nuevo?',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    })

    const btnfinalizar = document.getElementById('finalizarCompra')
    btnfinalizar.addEventListener('click', () => {
        if (Object.keys(productosCarrito).length !== 0) {
            Swal.fire({
                title: "Pedido confirmado",
                text: "Será preparado tu pedido",
                imageWidth: 170,
                imageHeight: 159,
                imageAlt: "Ok image",
            })
        } else {
            Swal.fire({
                title: 'Ooh!! No puedes finalizar ',
                text: 'Debes llenar tu carrito!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        productosCarrito = {}
        completarCarrito()
    })
}

const btnAccion = e => {
    if (e.target.classList.contains('btn-success')) {

        const disco = productosCarrito[e.target.dataset.id]
        disco.cantidad++
        productosCarrito[e.target.dataset.id] = {
            ...disco
        }
        completarCarrito()
    }
    if (e.target.classList.contains('btn-danger')) {

        const disco = productosCarrito[e.target.dataset.id]
        disco.cantidad--
        if (disco.cantidad === 0) {
            delete productosCarrito[e.target.dataset.id]
        }
        completarCarrito()
    }
    e.stopPropagation()
}

// Seccion contacto
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
        emailError.textContent = 'El valor insertadi ni es valido';
    } else if (email.validity.tooShort) {
        emailError.textContent = `El correo electronico es muy corto. Reviselo antes de hacer el envío.`;
    }

    emailError.className = 'error activo';
}
const campoNombre = document.getElementById('nombre')
const campoNumber = document.getElementById('telefono')

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
    if ((isNaN(campoNumber.value)) (campoNombre.value == "")) {
        ev.preventDefault()
        Swal.fire(
            'Debe ingresar datos válidos'
        )
    }
}