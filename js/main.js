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


// SIMULADOR ANTERIOR
let consulta = confirm("¿Le gustaría obtener información acerca de alguna camiseta?")
if (consulta) {
    info()
} else {
    alert("De acuerdo, que tenga un buen dia!")
}

function info() {
    let consultarInfo = prompt("¿De qué camiseta le gustaría obtener información?")

    if(consultarInfo.toLocaleLowerCase() === "argentina"){
        alert("Nombre: " + camisetas[0].nombre + "\n" + "Precio: " + camisetas[0].precio + "\n" + "Talles Disponibles: " + camisetas[0].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "atletico de madrid"){
        alert("Nombre: " + camisetas[1].nombre + "\n" + "Precio: " + camisetas[1].precio + "\n" + "Talles Disponibles: " + camisetas[1].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "barcelona"){
        alert("Nombre: " + camisetas[2].nombre + "\n" + "Precio: " + camisetas[2].precio + "\n" + "Talles Disponibles: " + camisetas[2].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "boca"){
        alert("Nombre: " + camisetas[3].nombre + "\n" + "Precio: " + camisetas[3].precio + "\n" + "Talles Disponibles: " + camisetas[3].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "chelsea"){
        alert("Nombre: " + camisetas[4].nombre + "\n" + "Precio: " + camisetas[4].precio + "\n" + "Talles Disponibles: " + camisetas[4].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "inter"){
        alert("Nombre: " + camisetas[5].nombre + "\n" + "Precio: " + camisetas[5].precio + "\n" + "Talles Disponibles: " + camisetas[5].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "liverpool"){
        alert("Nombre: " + camisetas[6].nombre + "\n" + "Precio: " + camisetas[6].precio + "\n" + "Talles Disponibles: " + camisetas[6].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "newells"){
        alert("Nombre: " + camisetas[7].nombre + "\n" + "Precio: " + camisetas[7].precio + "\n" + "Talles Disponibles: " + camisetas[7].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "psg"){
        alert("Nombre: " + camisetas[8].nombre + "\n" + "Precio: " + camisetas[8].precio + "\n" + "Talles Disponibles: " + camisetas[8].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "river"){
        alert("Nombre: " + camisetas[9].nombre + "\n" + "Precio: " + camisetas[9].precio + "\n" + "Talles Disponibles: " + camisetas[9].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "talleres"){
        alert("Nombre: " + camisetas[10].nombre + "\n" + "Precio: " + camisetas[10].precio + "\n" + "Talles Disponibles: " + camisetas[10].tallesDisponibles)
        otraConsulta()
    } else if(consultarInfo.toLocaleLowerCase() === "tottenham"){
        alert("Nombre: " + camisetas[11].nombre + "\n" + "Precio: " + camisetas[11].precio + "\n" + "Talles Disponibles: " + camisetas[11].tallesDisponibles)
        otraConsulta()
    } else{
        alert("Lo siento, no tenemos esa camiseta")
        otraConsulta()
    }
}

function otraConsulta() {
    let masInfo = confirm("¿Le gustaría consultar por otra camiseta?")
    if (masInfo) {
        info()
    } else{
        alert("De acuerdo, gracias por consultar!")
    }
}
