// CONSTRUCTOR
class Producto{
    constructor(id, nombre, precio, tallesDisponibles){
        this.id = id
        this.nombre = nombre
        this.precio = precio 
        this.tallesDisponibles = tallesDisponibles
    }
}
// PRODUCTOS
const camisetas = []
camisetas.push(new Producto(1, "CAMISETA SUPLENTE ARGENTINA 2020-21", 10000, "S, M, XL"))
camisetas.push(new Producto(2, "CAMISETA TITULAR ATLETICO DE MADRID 2022-23", 5000, "XS, M, L"))
camisetas.push(new Producto(3, "CAMISETA TITULAR BARCELONA 2021-22", 7000, "XS, S, M"))
camisetas.push(new Producto(4, "CAMISETA TITULAR BOCA JUNIORS 2021-22", 4000, "XXS, S, M, XL, XXL"))
camisetas.push(new Producto(5, "CAMISETA SUPLENTE CHELSEA 2021-22", 5000, "XXS, S, XL"))
camisetas.push(new Producto(6, "CAMISETA ALTERNATIVA INTER DE MILAN 2021-22", 5000, "S, L"))
camisetas.push(new Producto(7, "CAMISETA SUPLENTE LIVERPOOL 2022-23", 5000, "XXS, S"))
camisetas.push(new Producto(8, "CAMISETA SUPLENTE NEWELL'S OLD BOYS 2021-22", 3000, "L, XL"))
camisetas.push(new Producto(9, "CAMISETA SUPLENTE PARIS SAINT GERMAIN 2022-23", 7000, "S, M"))
camisetas.push(new Producto(10, "CAMISETA TITULAR RIVER PLATE 2021-22", 4000, "XXS, L"))
camisetas.push(new Producto(11, "CAMISETA TITULAR TALLERES DE CORDOBA 2021-22", 3000, "M, L"))
camisetas.push(new Producto(12, "CAMISETA SUPLENTE TOTTENHAM 2022-23", 5000, "XXS"))

// BUSCAR CAMISETAS
function buscarCamiseta() {
    let parametro = prompt("Ingrese el nombre de la camiseta que le interesa")
    let resultado = camisetas.filter((camiseta) => camiseta.nombre.includes(parametro.toUpperCase()))
    console.table(resultado);
}

// DOM Y EVENTS

const agregarComentario = document.getElementById("btn-comentarios")
agregarComentario.addEventListener("click", coment)

function coment() {
    let entradaComentario = prompt("Ingrese su comentario aqui: ")
    let autorComentario = prompt("Ingrese su nombre completo: ")
    const comentarios = document.getElementById("comentarios")
    const nuevoComentario = document.createElement("li")
    nuevoComentario.textContent = "\"" + entradaComentario + "\"" + " - " + autorComentario
    comentarios.append(nuevoComentario)
}





