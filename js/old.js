
// const cart = []

// // Creacion del HTML del Carrito
// const updateCart = () => {
//     let cartContainer = document.querySelector("#cart");

//     let container = document.querySelector("#cartContainer")
//     if (container) {
//             container.parentNode.removeChild(container)
//     }
//     let div = document.createElement("div")
//     div.setAttribute("id", "cartContainer")
//     div.setAttribute("class", "cart")
//     div.innerHTML = `<h2>Carrito de Compras</h2>`
//     for (const camiseta of cart) {
//         div.innerHTML +=  ` 
//                 <div class="cart__item">
//                     <h4>Producto: ${camiseta.nombre}</h4>
//                     <h4>Precio: $${camiseta.precio}</h4>
//                     <h4>Cantidad: ${camiseta.quantity}</h4>
//                 </div>
//                 `
//         cartContainer.appendChild(div)
//     }
// }


// const loadEvents = () => {
//     let buttons = document.querySelectorAll(".btn-carrito")
//     for (const button of buttons) {
//         button.addEventListener("click", () => {
            
//             let cami = cart.find(camiseta => camiseta.id == button.id)
//             if (cami) {
//                 // Ya está en el carrito
//                 cami.quantity++
//             } else{
//                 // Lo agregamos
//                 let cami = camisetas.find(camiseta => camiseta.id == button.id)
//                 if (cami) {
//                     let newCamiseta = {
//                         id: cami.id,
//                         nombre: cami.nombre,
//                         precio: cami.precio,
//                         imagen: cami.imagen,
//                         quantity: 1
//                     }
//                     cart.push(newCamiseta)
//                 }
//             }
            
//             updateCart()

//         })
//     }
// }


// let carrito = []

// const loadProducts = (camisetas) => {
//     let container = document.querySelector("#container");
//     for (const camiseta of camisetas) {
//         let div = document.createElement("div")
//         div.setAttribute("class", "card")
//         div.innerHTML = `
//                         <div class="card__img">
//                             <img src="${camiseta.imagen}" alt="camiseta">
//                         </div>
//                         <div class="card__text">
//                             <p>${camiseta.nombre}</p>
//                             <p>$${camiseta.precio}</p>
//                         </div>
//                         <div class="card__button">
//                             <button href="#" class = "btn-carrito" id = "${camiseta.id}"><i class="fa-solid fa-cart-shopping"></i></button>
//                         </div>
//                         `
//         container.appendChild(div)

//     }
    
//     // Carga de eventos
//     loadEvents()
// }
// loadProducts(camisetas)