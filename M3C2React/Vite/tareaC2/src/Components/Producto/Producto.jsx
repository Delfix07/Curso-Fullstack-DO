import Titulo from "../Titulo/Titulo";
import Sub from "../Sub/Sub";
import Valor from "../Valor/Valor";


export default function Producto ({nombre, img, valor}) {
    return(
        <article>
            <Sub texto={nombre}/>
            <img src={img} alt={nombre} className="imgProducto"/>
            <Valor numero={valor}/> 
            <button className="btn">¡Compra ya!</button>
        </article>
    );
}