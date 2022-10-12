 // Carga de las cards (HTML) de las camisetas
const URL = "../bbdd/stock.json"
const cargarCards = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        camisetas = data
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

    } catch (error) {
        container.innerHTML = mostrarError()
    } 
}
cargarCards()

// Error
const mostrarError = () => {
    return ` <div class="error">
                <div class="error__img">
                    <img src="img/scalo.jpeg">
                </div>
                <h2 class="error__title">¡NOOOOO!</h2>
                <p class="error__text">No pudimos cargar las camisetas</p>
            </div>`
}

// Abrir carrito
cartIcon.addEventListener("click", () => {
    carritoProductos.classList.toggle("active")
})

// Cerrar carrito
closeCart.addEventListener("click", () => {
    carritoProductos.classList.remove("active")
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
    alertaAgregarAlCarrito()
}

// Sweet Alert -> Agregar al Carrito
const alertaAgregarAlCarrito = () => {
    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Agregado al carrito',
        background: "rgb(230, 230, 230)",
        color: "rgb(7,46,81)",
        iconColor: "green"
    })
}

// HTML del Carrito - Actualizar Carrito
const actualizarCarrito = () => {
    carritoContainer.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("cart__product")
        div.innerHTML = `
                        <p class="cart__product-data">${prod.nombre}</p>
                        <p class="cart__product-data">Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                        <p class="cart__product-data">Precio: $${prod.precio}</p>
                        <button onclick="eliminarDelCarrito(${prod.id})" class="cart__product-delete"><i class="fa-solid fa-trash"></i></button>
                        `
        carritoContainer.appendChild(div)

        // Carrito en Local Storage
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    // Actualizar contador del carrito
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0) 

    // Actualizar precio total
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) 
}

// Local Storage
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})

// Finalizar Compra
btnFinalizarCompra.addEventListener("click", () => {
    Swal.fire({
        title: '¿Está seguro que desea finalizar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#072e51',
        cancelButtonColor: '#A52502',
        confirmButtonText: 'Finalizar',
        cancelButtonText: "Cancelar",
        background: "rgb(230, 230, 230)",
        color: "rgb(7,46,81)",
        iconColor: "rgb(117,170,219)"
      }).then((result) => {
        if (result.isConfirmed) {
            if (carrito.length != 0) {
                carrito.length = 0
                carritoContainer.innerHTML = loading()
                setTimeout(() => {
                    alertaCompra()
                    actualizarCarrito()
                }, 3000);

                // Limpiar LocalStorage
                localStorage.removeItem("carrito")
            } else{
                alertErrorCompra()
            }
        }
    })
}) 

// Sweet Alert -> Finalizar Compra
const alertaCompra = () => {
    Swal.fire({
        title: 'Golazo!',
        text: 'Su compra fue realizada con éxito.',
        imageUrl: 'img/diegol.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Maradona gritando gol',
        confirmButtonText: "Volver",
        confirmButtonColor: "#072e51",
        background: "rgb(230, 230, 230)",
        color: "rgb(7,46,81)"
    })
}

// Sweet Alert -> Error al finalizar Compra
const alertErrorCompra = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No tiene productos cargados en el carrito',
        confirmButtonText: "Volver",
        confirmButtonColor: "#072e51",
        background: "rgb(230, 230, 230)",
        color: "rgb(7,46,81)",
        iconColor: "red"
      })
}

// Vaciar Carrito
btnVaciarCarrito.addEventListener("click", () => {
    alertaVaciar()
})  

// Sweet Alert -> Vaciar Carrito
const alertaVaciar = () => {
    Swal.fire({
        title: '¿Está seguro?',
        text: "Se perderan los productos guardados en el carrito.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#072e51',
        cancelButtonColor: '#A52502',
        confirmButtonText: 'Vaciar',
        cancelButtonText: "Cancelar",
        background: "rgb(230, 230, 230)",
        color: "rgb(7,46,81)",
        iconColor: "red"
      }).then((result) => {
        if (result.isConfirmed) {
            carrito.length = 0
            actualizarCarrito()
            
            // Limpiar Loca-borderlStorage
            localStorage.removeItem("carrito")
        }
    })
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

// Loader
const loading = () => {
    return `<span class="loader"></span>`
}