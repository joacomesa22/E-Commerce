const camisetas = [
    {
        id: 1,
        nombre: "SUPLENTE ARGENTINA 2020-21",
        precio: 10000,
        imagen: "img/argentina.jpeg"
    },
    {
        id: 2,
        nombre: "TITULAR ATLETICO DE MADRID 2022-23",
        precio: 5000,
        imagen: "img/atletico-m.jpeg"
    },
    {
        id: 3,
        nombre: "TITULAR BARCELONA 2021-22",
        precio: 7000,
        imagen: "img/barcelona.jpeg"
    },
    {
        id: 4,
        nombre: "TITULAR BOCA JUNIORS 2021-22",
        precio: 4000,
        imagen: "img/boca.jpeg"
    },
    {
        id: 5,
        nombre: "SUPLENTE CHELSEA 2021-22",
        precio: 5000,
        imagen: "img/chelsea.jpeg"
    },
    {
        id: 6,
        nombre: "ALTERNATIVA INTER DE MILAN 2021-22",
        precio: 5000,
        imagen: "img/inter.jpeg"
    },
    {
        id: 7,
        nombre: "SUPLENTE LIVERPOOL 2022-23",
        precio: 5000,
        imagen: "img/liverpool.jpeg"
    },
    {
        id: 8,
        nombre: "SUPLENTE NEWELL'S OLD BOYS 2021-22",
        precio: 3000,
        imagen: "img/newells.jpeg"
    },
    {
        id: 9,
        nombre: "SUPLENTE PARIS SAINT GERMAIN 2022-23",
        precio: 7000,
        imagen: "img/psg.jpeg"
    },
    {
        id: 10,
        nombre: "TITULAR RIVER PLATE 2021-22",
        precio: 4000,
        imagen: "img/river.jpeg"
    },
    {
        id: 11,
        nombre: "TITULAR TALLERES DE CORDOBA 2021-22",
        precio: 3000,
        imagen: "img/talleres.jpeg"
    },
    {
        id: 12,
        nombre: "TITULAR TOTTENHAM 2022-23",
        precio: 5000,
        imagen: "img/tottenham.jpeg"
    }
]

const cart = []

// Creacion del HTML del Carrito
const updateCart = () => {
    let cartContainer = document.querySelector("#cart");

    let container = document.querySelector("#cartContainer")
    if (container) {
            container.parentNode.removeChild(container)
    }
    let div = document.createElement("div")
    div.setAttribute("id", "cartContainer")
    div.setAttribute("class", "cart")
    div.innerHTML = `<h2>Carrito de Compras</h2>`
    for (const camiseta of cart) {
        div.innerHTML +=  ` 
                <div class="cart__item">
                    <h4>Producto: ${camiseta.nombre}</h4>
                    <h4>Precio: $${camiseta.precio}</h4>
                    <h4>Cantidad: ${camiseta.quantity}</h4>
                </div>
                `
        cartContainer.appendChild(div)
    }
}


const loadEvents = () => {
    let buttons = document.querySelectorAll(".btn-carrito")
    for (const button of buttons) {
        button.addEventListener("click", () => {
            
            let cami = cart.find(camiseta => camiseta.id == button.id)
            if (cami) {
                // Ya está en el carrito
                cami.quantity++
            } else{
                // Lo agregamos
                let cami = camisetas.find(camiseta => camiseta.id == button.id)
                if (cami) {
                    let newCamiseta = {
                        id: cami.id,
                        nombre: cami.nombre,
                        precio: cami.precio,
                        imagen: cami.imagen,
                        quantity: 1
                    }
                    cart.push(newCamiseta)
                }
            }
            
            updateCart()

        })
    }
}


let carrito = []

const loadProducts = (camisetas) => {
    let container = document.querySelector("#container");
    for (const camiseta of camisetas) {
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
                            <button href="#" class = "btn-carrito" id = "${camiseta.id}"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                        `
        container.appendChild(div)

    }
    
    // Carga de eventos
    loadEvents()
}
loadProducts(camisetas)










