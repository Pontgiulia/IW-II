// var result = document.getElementById('result')


// function peganm(){
//     var nome = document.getElementById('nome').value
//     console.log('nome: ', nome)
//     result.innerHTML = nome
// }



const somar = document.getElementById('soma')
const subtracao = document.getElementById('subtr')
const multiplicacao = document.getElementById('mult')
const divisao = document.getElementById('divi')
const limpar = document.getElementById('lim')

const result = document.getElementById('result')

const numer = document.getElementById('prim')
const nume = document.getElementById('segn')
var num1 = 0
var num2 = 0

function fazsoma(){

    num1 = Number(numer.value)
    num2 = Number(nume.value)
    var soma = (num1+num2)
    console.log ('soma ', soma)
    result.innerHTML = soma  
}

somar.addEventListener("click", fazsoma)

function fazsubtracao(){

    num1 = Number(numer.value)
    num2 = Number(nume.value)
    var subtr = (num1-num2)
    console.log ('subtr ', subtr)
    result.innerHTML = subtr  
}

somar.addEventListener("click", fazsubtracao)

function fazmult(){

    num1 = Number(numer.value)
    num2 = Number(nume.value)
    var mult = (num1*num2)
    console.log ('mult ', mult)
    result.innerHTML = soma  
}

somar.addEventListener("click", fazsoma)

function fazsoma(){

    num1 = Number(numer.value)
    num2 = Number(nume.value)
    var soma = (num1+num2)
    console.log ('soma ', soma)
    result.innerHTML = soma  
}

somar.addEventListener("click", fazsoma)

function fazsoma(){

    num1 = Number(numer.value)
    num2 = Number(nume.value)
    var soma = (num1+num2)
    console.log ('soma ', soma)
    result.innerHTML = soma  
}

somar.addEventListener("click", fazsoma)


