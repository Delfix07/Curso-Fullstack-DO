//Ejercicio 1

class cuentaBancarea {
    constructor (titular, saldo) {
        this.titular=titular
        this.saldo=saldo
    }
    depositar(monto){
        this.saldo +=monto
    }
    extarer(monto){
        if (this.saldo>=monto){
            this.saldo-=monto
        }else{
            console.log("No hay saldo suficiente")
        }
    }
    consultarSaldo(){
        console.log(`titular: ${this.titular}\nsaldo: ${this.saldo}`)
    }
}

const actividadBancarea = new cuentaBancarea("Ana", 10000)
actividadBancarea.depositar(5000)
actividadBancarea.consultarSaldo()
console.log("----------")
actividadBancarea.extarer(10000)
actividadBancarea.consultarSaldo()
console.log("----------") 
actividadBancarea.extarer(8000)
actividadBancarea.consultarSaldo()
console.log("----------") 


//Ejercicio 2
class personaje{
    constructor(nombre, vida, ataque){
        this.nombre=nombre
        this.vida=vida
        this.ataque=ataque
    }
    recibirAtaque(cantidad){
        if (this.vida>=0){
            this.vida-=cantidad
        }else{
            this.vida=0
            console.log("GameOver")
        }
    }
    curar(cantidad){
        this.vida += cantidad
    }
    mostrarEstado(){
        console.log(`Nombre:${this.nombre}\nVida:${this.vida}\nAtaque:${this.ataque}`)
    }
}

const personaje1 = new personaje("Wanda", 300, 100)
personaje1.recibirAtaque(100)
personaje1.mostrarEstado()
console.log("--------")
personaje1.curar(200)
personaje1.mostrarEstado()
console.log("--------")
personaje1.recibirAtaque(500)
personaje1.mostrarEstado()
console.log("--------")

//Actividad 3
class auto{
    constructor(marca, modelo, combustible){
        this.marca=marca
        this.modelo=modelo
        this.combustible=combustible
    }
    conducir(km){
        const consumo = km/10
        if(this.combustible>=consumo){
            this.combustible -= consumo
            console.log(`Se consumio ${consumo}L en ${km}km`) 
        }else{
            console.log("Combustible insuficiente")
        }
    }
    cargarCombustible(litros){
        this.combustible+=litros
        console.log(`Se cargo: ${litros}L`)
    }
    mostrarInfo(){
        console.log(`Marca:${this.marca}\nModelo:${this.modelo}\nCombustible:${this.combustible}`)
    }
}
const auto1 = new auto ("Toyota", "Corolla", 20)
auto1.conducir(50)
auto1.mostrarInfo()
console.log("-------")
auto1.cargarCombustible(30)
auto1.conducir(20)
auto1.mostrarInfo()
console.log("-------")

//Actividad 4
class alumno{
    constructor(nombre, curso, notas){
        this.nombre=nombre
        this.curso=curso
        this.notas=notas
    }
    agregarNota(nota){
        this.notas.push(nota)
        console.log(this.notas)
    }
    calcularPromedio(){
        let promedio = this.notas.reduce((acumulador, nota) => acumulador+nota, 0)
        let calculo = promedio / this.notas.length
        console.log(`Promedio: ${promedio}`)
        return promedio

    }
    aprobo(){
        let promedio = this.calcularPromedio()
        if (promedio >=6){
            console.log("Aprobado")
        }else{
            console.log("Desaprobado")
        }
    }
}
const alumno1 = new alumno ("Delfina", "5A", [6,7,8,10,3])
alumno1.agregarNota(9)
alumno1.agregarNota(7)
alumno1.calcularPromedio()
alumno1.aprobo()
console.log("-------")

//Actividad 5
class carrito{
    constructor(productos){
        this.productos=productos
    }
    agregarProducto(producto){
    this.productos.push(producto)
    }
    eliminarProducto(nombre){
    this.productos= this.productos.filter(producto=>producto!==nombre)
    }
    mostrarProductos(){
    console.log(`Productos: ${productos.length}`)
    }
    calcularTotal(){
    let total= this.productos.reduce((acumulador, producto) => acumulador + producto, 0)
    console.log(`El total es de: $${total}`)
    return total
    }
}
const productos = new carrito(["Martillo", "Destornillador", "Tornillo"])
productos.agregarProducto("Clavo")
productos.agregarProducto("Tuerca")
productos.mostrarProductos()
console.log("-------")
productos.eliminarProducto("Tuerca")
productos.mostrarProductos()
console.log("-------")
productos.calcularTotal()
//Entré en duda con esta ultima parte de calcularTotal...como deberia de agregar los precios?
