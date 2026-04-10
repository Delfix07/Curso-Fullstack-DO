let numeros = [1,2,3,4,5]
numeros.shift()
numeros.shift()
numeros.shift()
numeros.shift()
numeros.shift()
numeros.unshift(5,4,3,2,1)
console.log(numeros)
console.log("---------")

let personas = ["Tiziana", "Renata", "Matteo", "Lucia"]
while (personas.length > 0){
    let eliminar = personas.pop()
    console.log(eliminar)
}
console.log(personas)
console.log("---------")

let letras = ["a", "b", "c"]
let resultado = []
for (let i=0; i < letras.length; i++){
    resultado.push(letras[i] + letras[i])
}
console.log(resultado)