const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const restaurar = document.getElementById('restaurar')

const lampada = document.getElementById('lamp')

//------------------------------------------------------


//se estiver quebrada
function quebrada(){
    return lampada.src.indexOf('quebrada') > -1 
    //retorna true ou false
}

//lampada ligada
function lamplig(){ 
    if (!quebrada()){
        lampada.src = "img/ligada.jpg"
    }
}

ligar.addEventListener('click', lamplig)

//lampada desligada
function lampdes(){
    if (!quebrada()){
        lampada.src = "img/desligada.jpg"
    }
}

desligar.addEventListener('click', lampdes)

//quando o mouse passar por cima a lampada vai ligar ou desligar
//lampada.addEventListener('mouseover', lamplig)
//lampada.addEventListener('mouseleave', lampdes)

//Lampada quebrada
function lampque(){
    lampada.src = "img/quebrada.jpg"
}

lampada.addEventListener('dblclick', lampque)


//Lampada restaurada
function lamprest(){
    lampada.src = "img/desligada.jpg"
}

restaurar.addEventListener('click', lamprest)



let a = 10;

{
    let a = 2;
}
a = 3;
console.log(a);