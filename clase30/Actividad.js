class Producto{
  constructor(nombre, precio, stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
  }
  vender(cantidad){
    if (cantidad <= this.stock){
      this.stock-=cantidad
    }else{
      console.log("No hay stock suficiente")
    }
  }
  reponer (cantidad){
    this.stock += cantidad
  }
  cambiarPrecio(operacion = "aumentar", precio=0){
    if (operacion == "aumentar" || operacion == "disminuir"){
      this.precio = operacion == "aumentar" ? this.precio + precio : this.precio - precio
    }else{
      console.log("Operacion no valida")
    }
  }
  mostrarInfo(){
    console.log(`Nombre: ${this.nombre}\nPrecio:${this.precio}\nStock:${this.stock}`)
  }
}

const producto1= new Producto("Comida para perro", 2000, 15)
producto1.reponer(10)
producto1.vender(2)
producto1.vender(5)
producto1.mostrarInfo()
console.log("------")
producto1.cambiarPrecio("aumentar", 3000)
producto1.mostrarInfo()
console.log("------")
producto1.cambiarPrecio("disminuir", 1000)
producto1.mostrarInfo()
