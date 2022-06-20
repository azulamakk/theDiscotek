// Establecemos un vinculo entre los elementos del HTML -DOM- para vincularlos con variables

const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("templateCard").content
const templateFooter = document.getElementById("templateFooter").content
const templateCarrito = document.getElementById("templateCarrito").content
const fragment = document.createDocumentFragment()
let productosCarrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        productosCarrito = JSON.parse(localStorage.getItem('carrito'))
        completarCarrito()
    }
})

cards.addEventListener('click', e => {
    addCarrito(e)
})

items.addEventListener('click', e => {
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
    data.forEach(producto => {
        const {
            id,
            nombre,
            artista,
            genero
        } = producto

        templateCard.querySelector('.btn-dark').dataset.id = id
        templateCard.querySelector('img').setAttribute('src', img)
        templateCard.querySelector('h4').textContent = nombre
        templateCard.querySelector('h5').textContent = artista
        templateCard.querySelector('p').textContent = genero

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        e.target.onmouseover = () => {
            e.target.style.backgroundColor = 'green'
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

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        nombre: disco.querySelector('h4').textContent,
        artista: disco.querySelector('h5').textContent,
        genero: disco.querySelector('p').textContent,
        cantidad: 1
    }
    if (productosCarrito.hasOwnProperty(producto.id)) {
        producto.cantidad = productosCarrito[producto.id].cantidad + 1
    }

    //empujar ahora todo al carrito
    productosCarrito[producto.id] = {
        ...producto
    }
    completarCarrito()
}

const completarCarrito = () => {
    items.innerHTML = ''
    Object.values(productosCarrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.modelo
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    completarFooter()

    localStorage.setItem('carrito', JSON.stringify(productosCarrito))
}


const completarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(productosCarrito).length === 0) {
        footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
      `
    }

    const nCantidad = Object.values(productosCarrito).reduce((acc, {
        cantidad
    }) => acc + cantidad, 0)
    const nPrecio = Object.values(productosCarrito).reduce((acc, {
        cantidad,
        precio
    }) => acc + cantidad * precio * 1.19, 0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        productosCarrito = {}
        completarCarrito()

        Swal.fire({
            title: 'Ooh!! Vuelve a comprar',
            text: 'Haz vaciado tu carrito!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    })

    const btnfinalizar = document.getElementById('finalizar-compra')
    btnfinalizar.addEventListener('click', () => {
        if (Object.keys(productosCarrito).length !== 0) {
            Swal.fire({
                title: "Pedido confirmado",
                text: "Será preparado tu pedido",
                imageUrl: 'https://unsplash.it/400/200',
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
    // console.log(e.target)
    if (e.target.classList.contains('btn-success')) {

        const producto = productosCarrito[e.target.dataset.id]
        producto.cantidad++
        productosCarrito[e.target.dataset.id] = {
            ...producto
        }
        completarCarrito()
    }
    if (e.target.classList.contains('btn-danger')) {

        const producto = productosCarrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete productosCarrito[e.target.dataset.id]
        }
        completarCarrito()
    }
    e.stopPropagation()
}