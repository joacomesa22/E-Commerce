let argentina = 10000
let atletico = 5000
let barcelona = 7000
let boca = 4000
let chelsea = 5000
let inter = 5000
let liverpool = 5000
let newells = 3000
let psg = 7000
let river = 4000
let talleres = 3000
let tottenham = 5000

let consulta = confirm("¿Le gustaría consultar algun precio?")


if (consulta) {
    precio()
} else {
    alert("De acuerdo, que tenga un buen dia!")
}

function precio() {
    let consultarPrecio = prompt("¿De qué camiseta le gustaría saber el precio?")

    if(consultarPrecio.toLocaleLowerCase() === "argentina"){
        alert("La camiseta de Argentina cuesta " + argentina)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "atletico de madrid"){
        alert("La camiseta del Atletico de Madrid cuesta " + atletico)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "barcelona"){
        alert("La camiseta del Barcelona cuesta " + barcelona)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "boca"){
        alert("La camiseta de Boca cuesta " + boca)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "chelsea"){
        alert("La camiseta del Chelsea cuesta " + chelsea)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "inter"){
        alert("La camiseta del Inter cuesta " + inter)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "liverpool"){
        alert("La camiseta del Liverpool cuesta " + liverpool)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "newells"){
        alert("La camiseta de Newells cuesta " + newells)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "psg"){
        alert("La camiseta del PSG cuesta " + psg)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "river"){
        alert("La camiseta de River cuesta " + river)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "talleres"){
        alert("La camiseta de Talleres cuesta " + talleres)
        otraConsulta()
    } else if(consultarPrecio.toLocaleLowerCase() === "tottenham"){
        alert("La camiseta del Tottenham cuesta " + tottenham)
        otraConsulta()
    } else{
        alert("Lo siento, no tenemos esa camiseta")
        otraConsulta()
    }
}

function otraConsulta() {
    let otroPrecio = confirm("¿Le gustaría consultar otro precio?")
    if (otroPrecio) {
        precio()
    } else{
        alert("De acuerdo, gracias por consultar!")
    }
}