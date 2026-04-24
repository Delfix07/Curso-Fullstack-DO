let usuario = {
    nombre: "Delfina",
    edad: 18,
    email: "Delfina@gmail.com",
    activo: true,
    saludar: function (){ return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años"},
    esMayorDeEdad: function(){ return this.edad >= 18}
}
console.log(usuario.saludar())
console.log(usuario.esMayorDeEdad())
usuario.edad=19
usuario.pais="Argentina"
console.log(usuario)

