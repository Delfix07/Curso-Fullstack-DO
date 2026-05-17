import "./App.css";
import {Producto, Titulo, Sub, Perfil} from "./Components";
import product from "./product/product";
import usuario from "./User/user";

function App(){
  return (
    <>
      <Titulo texto="Usuario"/>
      <section className="userPersona">
        {usuario.map((user)=>{
          return (
            <Perfil
              nombre={user.nombre}
              edad={user.edad}
              email={user.email} />
          );
        })}
      </section>
      <Titulo texto="Productos"/>
      <section className="contenedorProductos">
        {product.map((products)=> {
        return (
          <Producto
            nombre={products.nombre}
            img={products.img}
            valor={"$" + products.valor}/>
        );
        })}
      </section>
    </>
  )
}

export default App;