let texto = "hola github 1 mod2 cambios desde github"


window.addEventListener("DOMContentLoaded",()=>{
    crearParrafo(texto)
})

const crearParrafo = (texto) => {
    let divContainer = document.getElementById("container")
    let parrafo = document.createElement("P")
    parrafo.innerText = texto
    divContainer.appendChild(parrafo)
}