const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')

function estaQuebrada(){

    return lampada.src.indexOf('quebrada') > -1

}

function lampLigada(){

    if (!estaQuebrada()){
    lampada.src = "img/ligada.jpg"
    }

}

function lampDesligada(){

    if(!estaQuebrada()){
    lampada.src = "img/desligada.jpg"
    }

}

function lampQuebrada(){

    lampada.src = "img/quebrada.jpg"

}

function lampRestaura(){

    lampada.src = "img/desligada.jpg"

}

ligar.addEventListener('click', lampLig)
desligar.addEventListener('click', lampDes)
restaurar.addEventListener('click', lampRest )

lampada.addEventListener('mouseover', lampLig)
lampada.addEventListener('mouseleave',lampDes)

lampada.addEventListener('dblclick', lampQuebr)