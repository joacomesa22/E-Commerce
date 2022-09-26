const camisetas = [
    {
        id: 1,
        nombre: "SUPLENTE ARGENTINA 2020-21",
        precio: 10000,
        imagen: "img/argentina.jpeg",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "TITULAR ATLETICO DE MADRID 2022-23",
        precio: 5000,
        imagen: "img/atletico-m.jpeg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "TITULAR BARCELONA 2021-22",
        precio: 7000,
        imagen: "img/barcelona.jpeg",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "TITULAR BOCA JUNIORS 2021-22",
        precio: 4000,
        imagen: "img/boca.jpeg",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "SUPLENTE CHELSEA 2021-22",
        precio: 5000,
        imagen: "img/chelsea.jpeg",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "ALTERNATIVA INTER DE MILAN 2021-22",
        precio: 5000,
        imagen: "img/inter.jpeg",
        cantidad: 1
    },
    {
        id: 7,
        nombre: "SUPLENTE LIVERPOOL 2022-23",
        precio: 5000,
        imagen: "img/liverpool.jpeg",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "SUPLENTE NEWELL'S OLD BOYS 2021-22",
        precio: 3000,
        imagen: "img/newells.jpeg",
        cantidad: 1
    },
    {
        id: 9,
        nombre: "SUPLENTE PARIS SAINT GERMAIN 2022-23",
        precio: 7000,
        imagen: "img/psg.jpeg",
        cantidad: 1
    },
    {
        id: 10,
        nombre: "TITULAR RIVER PLATE 2021-22",
        precio: 4000,
        imagen: "img/river.jpeg",
        cantidad: 1
    },
    {
        id: 11,
        nombre: "TITULAR TALLERES DE CORDOBA 2021-22",
        precio: 3000,
        imagen: "img/talleres.jpeg",
        cantidad: 1
    },
    {
        id: 12,
        nombre: "TITULAR TOTTENHAM 2022-23",
        precio: 5000,
        imagen: "img/tottenham.jpeg",
        cantidad: 1

    }
]


// Contenedor de las cards
let container = document.querySelector("#container");

// Contenedor del carrito
const carritoContainer = document.querySelector("#cart-id")

// Boton Vaciar Carrito
const btnVaciarCarrito = document.querySelector("#vaciar-carrito")

// Contador de productos en el carrito
const contadorCarrito = document.querySelector("#contador-carrito")

// Precio total del carrito
const precioTotal = document.querySelector("#precio-total")

// Array del carrito donde se iran almacenando las camisetas agregadas
let carrito = []


// Local Storage
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})

// Vaciar Carrito
btnVaciarCarrito.addEventListener("click",() => {
    carrito.length = 0
    actualizarCarrito()

    // Limpiar LocalStorage
    localStorage.removeItem("carrito")
})


// Carga de las cards (HTML) de las camisetas 
camisetas.forEach((camiseta) => { 
    let div = document.createElement("div")
    div.setAttribute("class", "card")
    div.innerHTML = `
                    <div class="card__img">
                        <img src="${camiseta.imagen}" alt="camiseta">
                    </div>
                    <div class="card__text">
                        <p>${camiseta.nombre}</p>
                        <p>$${camiseta.precio}</p>
                    </div>
                    <div class="card__button">
                        <button href="#" class = "btn-carrito" id = "add${camiseta.id}"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                    `
    container.appendChild(div)

    // Boton para agregar al carrito
    const btn = document.getElementById(`add${camiseta.id}`)
    btn.addEventListener("click", () => {
        agregarAlCarrito(camiseta.id)
    })
}) 
    

// Agregar al carrito
const agregarAlCarrito = (camiId) => {
    const existe = carrito.some(cami => cami.id === camiId)
    
    if (existe) {
        carrito.map (cami => {
            // Operador Lógico AND
            cami.id === camiId && cami.cantidad++
        })
    } else {
        const item = camisetas.find((cami) => cami.id === camiId)
        carrito.push(item)
    }
    actualizarCarrito()
}

// Eliminar productos del carrito
const eliminarDelCarrito = (camiId) => {
    const item = carrito.find((cami) => cami.id === camiId)
    const i = carrito.indexOf(item)
    carrito.splice(i, 1)

    // Actualizar LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
    actualizarCarrito()
}

// HTML del Carrito - Actualizar Carrito
const actualizarCarrito = () => {
    carritoContainer.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("cart__product")
        div.innerHTML = `
                        <p>${prod.nombre}</p>
                        <p>Precio: $${prod.precio}</p>
                        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                        <button onclick="eliminarDelCarrito(${prod.id})" class="cart__product-delete"><i class="fa-solid fa-trash"></i></button>
                        `
        carritoContainer.appendChild(div)

        // Carrito en Local Storage
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    // Actualizar contador del carrito
    contadorCarrito.innerText = carrito.length

    // Actualizar precio total
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) 

}








