
let lista_nomes = ["João", "Dionatan", "uLton"]

function renderizar(){
    const lista_pagina = document.getElementById("lista")
  
    lista_pagina.innerHTML = ""
    for(let item of lista_nomes){
        let elemento = document.createElement('li')
        elemento.innerText = item
        lista_pagina.appendChild(elemento)
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    renderizar()})

const botao = document.getElementById("final")
const input = document.getElementById("input")


botao.addEventListener("click" ,function(){
   const texto = input.value;
    lista_nomes.push(texto)
    renderizar()
})

const botaoRemove = document.getElementById("remove")

botaoRemove.addEventListener("click", function(){
        lista_nomes.pop()
    renderizar()
})

const botaoPrimeiro = document.getElementById("primeiro")

botaoPrimeiro.addEventListener("click", function(){
    lista_nomes.shift()
    renderizar()
})

const botaoAdiciona = document.getElementById("adiciona")

botaoAdiciona.addEventListener("click", function(){
    lista_nomes.unshift()
    renderizar()
})