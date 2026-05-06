
let lista_nomes = ["João", "Dionatan", "uLton"]
let lista_maiusculo = lista_nomes.map(nome => nome.toUpperCase())
let lista_filtrada = lista_nomes.filter(nome => nome.length >= 5)

function renderizar(){
    const lista_pagina = document.getElementById("lista")
  
    lista_pagina.innerHTML = ""
    lista_nomes.forEach(nome => {
        let li = document.createElement("li")
        li.innerText = nome
        lista_pagina.appendChild(li)
    })

    contaNome()
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
    const texto = input.value;
    lista_nomes.unshift(texto)
    renderizar()
})

function contaNome(){
    const contagem = document.getElementById("contagem")
    let contador = 0;

    for(let nome of lista_nomes){
        if(nome.length >= 5){
            contador++
        }
    }
    contagem.innerText = contador;
}

document.getElementById("maiusculo").addEventListener("click", () =>{
   
    renderizar2(lista_maiusculo)
})

document.getElementById("filtrar").addEventListener("click", () =>{

    renderizar2(lista_filtrada)
})

function renderizar2(lista_qualquer){
    const lista_nova = document.getElementById("lista_2")

    lista_nova.innerHTML = ""

    lista_qualquer.forEach(nome => {
       let li = document.createElement("li")
        li.innerText = nome
        lista_nova.appendChild(li)
    })

}