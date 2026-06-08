import { useState } from "react"
import "./App.css";

function App(){
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    email: ""
  })


const [error, setError] = useState({
  nombre: "",
  apellido: "",
  edad: "",
  sexo: "",
  email: ""
})

function validarForm(){
  const regexNombApell = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errores={
  nombre: 
    form.nombre.length == 0 
    ? "Este campo debe contener algo" 
    : !regexNombApell.test(form.nombre) 
      ? "El nombre solo puede contener letras y espacios" 
      : "",

  apellido:
    form.apellido.length == 0 
    ? "Este campo debe contener algo" 
    : !regexNombApell.test(form.apellido) 
      ? "El apellido solo puede contener letras y espacios" 
      : "",
  
  edad:
    form.edad.length == 0 ? "Este campo debe contener algo"  : "",
  
  sexo: !form.sexo ? "Debes seleccionar una opcion" : "",
  email: 
    form.email.length == 0 
    ? "Este campo debe contener algo" 
    : !regexEmail.test(form.email) 
      ? "El email debe tener un formato válido" 
      : "",
}

setError(errores); 

return(
  errores.nombre !== "" || errores.apellido !== "" || errores.edad !== "" || errores.sexo !== "" || errores.email !== ""
)
}

const [mensaje, setMensaje] = useState ("")
const [datosEnviados, setDatosEnviados] = useState(null)

function manejarSubmit(event){ 
  event.preventDefault();
  const hayErrores = validarForm();
  if (hayErrores){
    setMensaje("Hay errores en el formulario");
  }else{
    setMensaje("Formulario enviado correctamente");
    setDatosEnviados(form);
  }

}

function handleChange(event){
  setForm({
    ...form,
    [event.target.name]:event.target.value, 
  });

  if (error[event.target.name].length !==0) {
    validarForm();
  }
}


function limpiarForm(){
  setForm({
    nombre:"",
    apellido:"",
    edad:"",
    sexo:"",
    email:""
  })

  setMensaje("")

  setError({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    email: ""
  })

  setDatosEnviados(null);
}




  <><h1>Formulario</h1></>
return(
  <div>
  <form onSubmit={manejarSubmit}>
    <label>Nombre</label>
    <input 
    type="text"
    name="nombre"
    value={form.nombre}
    onChange={handleChange}
    />
    {error.nombre.length !=0 ? <label className="error">{error.nombre}</label> : <></>}

    <label>Apellido</label>
    <input
    type="text"
    name="apellido"
    value={form.apellido}
    onChange={handleChange}
    />
    {error.apellido.length !=0 ? <label className="error">{error.apellido}</label> : <></>}

    <label>Edad</label>
    <input
    type= "number"
    name="edad"
    min={0}
    max={110}
    value={form.edad}
    onChange={handleChange}
    />
    {error.edad.length !=0 ? <label className="error">{error.edad}</label> : <></>}

    <label>Sexo</label>
    <select
     name="sexo"
     value={form.sexo}
     onChange={handleChange}
     required
    >
      <option value="" disabled>Seleccionar</option>
      <option value="Femenino">Femenino</option>
      <option value="Masculino">Masculino</option>
      <option value="Otro">Otro</option>
    </select>
    {error.sexo && <label className="error">{error.sexo}</label>}

    <label>Email</label>
    <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    />
    {error.email.length !=0 ? <label className="error">{error.email}</label> : <></>}
    <button>Enviar</button>
    <button type="button" onClick={limpiarForm}>Limpiar</button>
  </form>

<p>{mensaje}</p>
{datosEnviados && (
  <div className="datosEnviados">
    <h3>Nombre:{datosEnviados.nombre}</h3>
    <h3>Apellido:{datosEnviados.apellido}</h3>
    <h3>Edad:{datosEnviados.edad}</h3>
    <h3>Sexo:{datosEnviados.sexo}</h3>
    <h3>Email:{datosEnviados.email}</h3>
  </div>
)}
 </div>
);

}

export default App
