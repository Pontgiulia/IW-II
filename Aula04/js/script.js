const altura = document.getElementById('altu')
const peso = document.getElementById('pes')
const masculino = document.getElementById('masc')
const feminino = document.getElementById('fem')
const result = document.getElementById('res')

function imc(){
    var bmi = (peso / (altura * altura)).toFixed(2);
}