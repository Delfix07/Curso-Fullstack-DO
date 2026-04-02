let numeros = 101
for (let i = 1; i < numeros; i++){
    console.log(i)
}
console.log("----------")

console.log("Impares del 1 al 100")
for (let i = 1; i <= 100; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}
console.log("----------")

console.log("Múltiplos del 3")
for (let i =1; i <= 30; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}
console.log("----------")

let a = 6
let b = 3
console.log("El resultado de 6 + 3 es igual a: ", (a + b))