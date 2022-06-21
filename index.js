// Establecemos un vinculo entre los elementos del HTML -DOM- para vincularlos con variables

const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("templateCard").content
const templateFooter = document.getElementById("templateFooter").content
const templateCarrito = document.getElementById("templateCarrito").content
const fragment = document.createDocumentFragment()
let productosCarrito = {}

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

const fetchData = async () => {
    try {
        const res = await fetch("/discos.json") //Fetch hace un llamado al archivo discos.json, el cual contiene la informacion del catalogo
        const data = await res.json() // Contiene la info obtenida por fetch previamente
        printCards(data)
    } catch (error) {
        console.log(error)
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

