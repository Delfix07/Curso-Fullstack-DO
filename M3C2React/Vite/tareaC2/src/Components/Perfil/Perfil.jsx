import Sub from "../Sub/Sub"
import Titulo from "../Titulo/Titulo"

export default function Perfil({nombre, edad, email}){
    return (
        <article>
            <Sub texto="Nombre" valor={nombre}/>
            <Sub texto="Edad" valor={edad} />
            <Sub texto="Email" valor={email}/>
        </article>
    )
}