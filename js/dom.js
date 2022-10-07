// Carrito
const carritoProductos = document.querySelector(".cart")

// Contenedor del carrito
const carritoContainer = document.querySelector("#cart-id")

// Icono Carrito
const cartIcon = document.querySelector("#abrir-carrito")

// Icono cerrar Carrito
const closeCart = document.querySelector("#close-cart")

// Boton Vaciar Carrito
const btnVaciarCarrito = document.querySelector("#vaciar-carrito")

// Boton Finalizar Compra
const btnFinalizarCompra = document.querySelector("#comprar-carrito")

// Contador de productos en el carrito
const contadorCarrito = document.querySelector("#contador-carrito")

// Precio total del carrito
const precioTotal = document.querySelector("#precio-total")

// Array del carrito donde se iran almacenando las camisetas agregadas
let carrito = []

// Contenedor de las cards
let container = document.querySelector("#container");
