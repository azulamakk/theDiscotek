// Establecemos un vinculo entre los elementos del HTML -DOM- para vincularlos con variables

const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("templateCard").content
const templateFooter = document.getElementById("templateFooter").content
const templateCarrito = document.getElementById("templateCarrito").content
const fragment = document.createDocumentFragment()
let productosCarrito = {}

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
    if(localStorage.getItem('carrito')){
      productosSeleccionadoEnCarrito = JSON.parse(localStorage.getItem('carrito'))
      pintarCarrito()
    }
})

cards.addEventListener('click', e => { addCarrito(e)})
  
items.addEventListener('click', e => {btnAccion(e)})

const fetchData = async ()=> {
    try{
      const res = await fetch("/discos.json") //Fetch hace un llamado al archivo discos.json, el cual contiene la informacion del catalogo
      const data = await res.json() // Contiene la info obtenida por fetch previamente
      printCards(data)
    }
    catch(error){
      console.log(error)
    }
}

const printCards = data => {
    data.forEach(producto => {
      const {id, nombre, artista, genero} = producto
  
      templateCard.querySelector("p").textContent = id
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
    if(e.target.classList.contains('btn-dark')){
      e.target.onmouseover = () =>{
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