function calcularAreaRectangulo (b=0, h=0){
    return b*h
}
console.log("El area del rectangulo es = ", calcularAreaRectangulo(2,4))
console.log("----------------")

function esMayorDeEdad(edad){
    if (edad >= 18){
        return "Es mayor de edad"
    }else{
        return "Es menor de edad"
    }
}
console.log(esMayorDeEdad(19))
console.log("----------------")

let pais = "Argentina"
function dondeVivo (){
    let provincia = "Rio Negro"
    console.log("Vivo en", pais, ", en la provincia de", provincia)
}
dondeVivo()
console.log("----------------")

function repetirTexto(texto, numero){
    let resultado= ""
    for(let i= 0; i < numero; i++) {
    resultado += texto
    }
    return resultado
}
console.log(repetirTexto("Hola", 5))
