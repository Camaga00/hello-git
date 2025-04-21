let texto = "hola github 1 modificado otra vez"


window.addEventListener("DOMContentLoaded",()=>{
    crearParrafo(texto)
})

const crearParrafo = (texto) => {
    let divContainer = document.getElementById("container")
    let parrafo = document.createElement("P")
    parrafo.innerText = texto
    divContainer.appendChild(parrafo)
}