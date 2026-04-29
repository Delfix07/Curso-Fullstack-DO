let div = document.createElement("div")
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.gap = "10px"
document.body.appendChild(div)

fetch ("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then ((data) => {data.forEach((e) => {let article = document.createElement("article")
        let id = document.createElement("h2")
        id.textContent= "ID: " + e.id
        let nombre = document.createElement("h2")
        nombre.textContent= "Nombre: " + e.name
        let usuario = document.createElement("h2")
        usuario.textContent= "Username: " + e.username
        let email = document.createElement("h2")
        email.textContent= "Email: " + e.email
        let direccion= document.createElement("h2")
        direccion.textContent= "Dirección: " 
        let calle=document.createElement("h3")
        calle.textContent= "Calle: " + e.address.street
        let numero=document.createElement("h3")
        numero.textContent= "Numero: " + e.address.street
        let ciudad=document.createElement("h3")
        ciudad.textContent= "Ciudad: " + e.address.city
        let cP=document.createElement("h3")
        cP.textContent= "Código Postal: " + e.address.zipcode
        let geo= document.createElement("h2")
        geo.textContent= "Geo: " 
        let latitud=document.createElement("h3")
        latitud.textContent="Lat: " + e.address.geo.lat
        let longitud=document.createElement("h3")
        longitud.textContent="Lng: " + e.address.geo.lgn
        let telefono=document.createElement("h2")
        telefono.textContent= "Tel: " + e.phone
        let web=document.createElement("h2")
        web.textContent= "Web: " + e.website
        let compañia=document.createElement("h2")
        compañia.textContent= "Compañía: " 
        let cNombre=document.createElement("h3")
        cNombre.textContent= "Nombre de la Compañía: " + e.company.name
        let catchPhrase=document.createElement("h3")
        catchPhrase.textContent= "Frase: " + e.company.catchPhrase
        let bS=document.createElement("h3")
        bS.textContent= "Bs: " + e.company.bs

        article.style.border = "3px solid blue"
        article.style.borderRadius = "5px"
        article.style.display = "flex"
        article.style.flexDirection = "column"
        article.style.padding = "10px"
        article.style.alignItems= "center"
        article.style.backgroundColor="lightblue" 
    
        article.appendChild(id)
        article.appendChild(nombre)
        article.appendChild(usuario)
        article.appendChild(email)
        article.appendChild(direccion)
        article.appendChild(calle)
        article.appendChild(numero)
        article.appendChild(ciudad)
        article.appendChild(cP)
        article.appendChild(geo)
        article.appendChild(latitud)
        article.appendChild(longitud)
        article.appendChild(telefono)
        article.appendChild(web)
        article.appendChild(compañia)
        article.appendChild(cNombre)
        article.appendChild(catchPhrase)
        article.appendChild(bS)
        div.appendChild(article)
    })})