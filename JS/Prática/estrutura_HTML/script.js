const paragrafos = document.querySelector(".principal")

const estilo = getComputedStyle(document.body)
const background = estilo.backgroundColor


for (let p in paragrafos){
    p.style.backgroundColor = background
    p.style.color = "#FFFFFF"
}