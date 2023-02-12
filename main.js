let pontosPlayer = 0
let pontosMaquina = 0
let empate = 0

var pontosDoPlayer = document.querySelector("#pontos-player")
var pontosDaMaquina = document.querySelector("#pontos-maquina")
var empateGame = document.querySelector("#empate")


const btnPlayerPedra = document.querySelector("#player-pedra")
const btnPlayerPapel = document.querySelector("#player-papel")
const btnPlayerTesoura = document.querySelector("#player-tesoura")

const btnMaquinaPedra = document.querySelector("#maquina-pedra")
const btnMaquinaPapel = document.querySelector("#maquina-papel")
const btnMaquinaTesoura = document.querySelector("#maquina-tesoura")

function pedra() {
    btnPlayerPedra.classList.add('clicou')
    btnPlayerPapel.classList.remove('clicou')
    btnPlayerTesoura.classList.remove('clicou')

    let escolhaMaquina = Math.floor(Math.random() * 3 + 1)
    
    if(escolhaMaquina == 1){
        btnMaquinaPedra.classList.remove('clicou')
        btnMaquinaPapel.classList.add('clicou')
        btnMaquinaTesoura.classList.remove('clicou')
        pontosMaquina++
    }
    else if(escolhaMaquina == 2){
        btnMaquinaPedra.classList.add('clicou')
        btnMaquinaPapel.classList.remove('clicou')
        btnMaquinaTesoura.classList.remove('clicou')
        empate++
    }
    else if(escolhaMaquina == 3){
        btnMaquinaPedra.classList.remove('clicou')
        btnMaquinaPapel.classList.remove('clicou')
        btnMaquinaTesoura.classList.add('clicou')
        pontosPlayer++
    }

    pontosDoPlayer.innerHTML = `${pontosPlayer}`
    pontosDaMaquina.innerHTML = `${pontosMaquina}`
    empateGame.innerHTML = ` ${empate}`
}
function papel() {
    btnPlayerPedra.classList.remove('clicou')
    btnPlayerPapel.classList.add('clicou')
    btnPlayerTesoura.classList.remove('clicou')

    let escolhaMaquina = Math.floor(Math.random() * 3 + 1)
    
    if(escolhaMaquina == 1){
        btnMaquinaPedra.classList.remove('clicou')
        btnMaquinaPapel.classList.remove('clicou')
        btnMaquinaTesoura.classList.add('clicou')
        pontosMaquina++
    }
    else if(escolhaMaquina == 2){
        btnMaquinaPedra.classList.remove('clicou')
        btnMaquinaPapel.classList.add('clicou')
        btnMaquinaTesoura.classList.remove('clicou')
        empate++
    }
    else if(escolhaMaquina == 3){
        btnMaquinaPedra.classList.add('clicou')
        btnMaquinaPapel.classList.remove('clicou')
        btnMaquinaTesoura.classList.remove('clicou')
        pontosPlayer++
    }
    
    pontosDoPlayer.innerHTML = `${pontosPlayer}`
    pontosDaMaquina.innerHTML = `${pontosMaquina}`
    empateGame.innerHTML = ` ${empate}`
}
function tesoura() {
    btnPlayerPedra.classList.remove('clicou')
    btnPlayerPapel.classList.remove('clicou')
    btnPlayerTesoura.classList.add('clicou')

    let escolhaMaquina = Math.floor(Math.random() * 3 + 1)
    
    if(escolhaMaquina == 1){
        btnMaquinaPedra.classList.remove('clicou')
        btnMaquinaPapel.classList.remove('clicou')
        btnMaquinaTesoura.classList.add('clicou')
        empate++
    }
    else if(escolhaMaquina == 2){
        btnMaquinaPedra.classList.remove('clicou')
        btnMaquinaPapel.classList.add('clicou')
        btnMaquinaTesoura.classList.remove('clicou')
        pontosPlayer++
    }
    else if(escolhaMaquina == 3){
        btnMaquinaPedra.classList.add('clicou')
        btnMaquinaPapel.classList.remove('clicou')
        btnMaquinaTesoura.classList.remove('clicou')
        pontosMaquina++
    }

    pontosDoPlayer.innerHTML = `${pontosPlayer}`
    pontosDaMaquina.innerHTML = `${pontosMaquina}`
    empateGame.innerHTML = ` ${empate}`
}

btnPlayerPedra.addEventListener("click", () => {
    pedra()
})

btnPlayerPapel.addEventListener("click", () => {
    papel()
})
btnPlayerTesoura.addEventListener("click", () => {
    tesoura()
})

