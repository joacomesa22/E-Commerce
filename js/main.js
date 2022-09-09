// CONSTRUCTOR
class Producto{
    constructor(nombre, precio, tallesDisponibles){
        this.nombre = nombre
        this.precio = precio 
        this.tallesDisponibles = tallesDisponibles
    }
}
// PRODUCTOS
const camisetas = []
camisetas.push(new Producto("CAMISETA SUPLENTE ARGENTINA 2020-21", 10000, "S, M, XL"))
camisetas.push(new Producto("CAMISETA TITULAR ATLETICO DE MADRID 2022-23", 5000, "XS, M, L"))
camisetas.push(new Producto("CAMISETA TITULAR BARCELONA 2021-22", 7000, "XS, S, M"))
camisetas.push(new Producto("CAMISETA TITULAR BOCA JUNIORS 2021-22", 4000, "XXS, S, M, XL, XXL"))
camisetas.push(new Producto("CAMISETA SUPLENTE CHELSEA 2021-22", 5000, "XXS, S, XL"))
camisetas.push(new Producto("CAMISETA ALTERNATIVA INTER DE MILAN 2021-22", 5000, "S, L"))
camisetas.push(new Producto("CAMISETA SUPLENTE LIVERPOOL 2022-23", 5000, "XXS, S"))
camisetas.push(new Producto("CAMISETA SUPLENTE NEWELL'S OLD BOYS 2021-22", 3000, "L, XL"))
camisetas.push(new Producto("CAMISETA SUPLENTE PARIS SAINT GERMAIN 2022-23", 7000, "S, M"))
camisetas.push(new Producto("CAMISETA TITULAR RIVER PLATE 2021-22", 4000, "XXS, L"))
camisetas.push(new Producto("CAMISETA TITULAR TALLERES DE CORDOBA 2021-22", 3000, "M, L"))
camisetas.push(new Producto("CAMISETA SUPLENTE TOTTENHAM 2022-23", 5000, "XXS"))

// BUSCAR CAMISETAS
function buscarCamiseta() {
    let parametro = prompt("Ingrese el nombre de la camiseta que le interesa")
    let resultado = camisetas.filter((camiseta) => camiseta.nombre.includes(parametro.toUpperCase()))
    console.table(resultado);
}

// DOM
let padre = document.getElementById("comentarios")
let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"]

for (const persona of personas) {
    let li = document.createElement("li")
    li.innerHTML = persona
    padre.appendChild(li)
}





