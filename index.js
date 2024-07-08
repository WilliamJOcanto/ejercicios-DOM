// 1ra parte:

let titulo = document.getElementById("tituloDatos")

// 2da parte:

let tituloPrincipal = "Frutas"
titulo.innerText = tituloPrincipal

// **Agregando estilos:
titulo.style.fontWeight = "bold"

// 3ra parte:

let headerFooter = document.getElementsByClassName("tagSemantica")
headerFooter[0].style.backgroundColor = "orange"
headerFooter[1].style.backgroundColor = "orange"

// 4ta parte: 

let parrafoFooter = document.getElementsByClassName("parrafoFooter")
parrafoFooter[0].innerText = "William Jose Ocanto Hernandez. Cohort 55"

// 5ta parte:

let contenedorDivCards = document.getElementById("contenedor")

// 6ta parte:

function contenidoCard(foto, nombre, descripcion){
    let cardEstructura = `<article class = "flex flex-col items-center border-2 border-solid border-black bg-yellow-600 w-80 h-fit p-4 gap-2 rounded-xl">
                  <img class = "w-44 h-44 rounded-xl object-cover" src="${foto}" alt="${nombre}">
                  <h4 class = "text-center font-bold">${nombre}</h4>
                  <p>${descripcion}</p>
                </article>`
    return cardEstructura
}

// 7ma parte:

function crearArrayFrutas(arrayPreexistente){
    let nuevaArrayFrutas = []
    for (let i = 0; i<arrayPreexistente.length; i++) {
        nuevaArrayFrutas[i] = contenidoCard(arrayPreexistente[i].foto, arrayPreexistente[i].nombre, arrayPreexistente[i].descripcion)
    }
    return nuevaArrayFrutas
}

// 8va parte:

contenedorDivCards.innerHTML = crearArrayFrutas(frutas).join(" ")

// 9na parte:

let contenedorDivLista = document.getElementById("listas")

// 10ma parte:

function crearUl(){
    let elementoUl = document.createElement("ul")
    elementoUl.style.listStyle = "disc"
    return elementoUl
}

function crearLi(array, indice){
    let item = document.createElement("li")
    item.innerText = array[indice].nombre

    return item
}

function crearLista(arrayFruits){
    let ul = crearUl()
    for (let i = 0; i < arrayFruits.length; i++) {
        if(arrayFruits[i].esDulce){
            ul.appendChild(crearLi(arrayFruits, i))
        }
    }
    return ul
}

contenedorDivLista.appendChild(crearLista(frutas))
