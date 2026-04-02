let nombre = "Delfina"
let pais = "Argentina"
let edad = 18
let tieneTrabajo = true

console.log(nombre,pais,edad,tieneTrabajo)
console.log("----------")

console.log("¿Es mayor de edad?")
if (edad >=18){
    console.log("Si es mayor de edad")
}else{
    console.log("No es mayor de edad")
}
console.log("----------")

console.log("¿Tiene trabajo?")
if (tieneTrabajo == true){
    console.log("Si tiene trabajo")
}else{
    console.log("No tiene trabajo")
}
console.log("----------")

if (tieneTrabajo == true && edad >= true){
    console.log("Puede trabajar")
}else{
    console.log("No cumple con los requisitos")
}
