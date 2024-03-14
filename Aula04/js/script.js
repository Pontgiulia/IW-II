const img = document.getElementById('img')

function calcular(){
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    var calcular = peso / (altura * altura)
    resultIMC.innerHTML = calcular
    diag(calcular)
}

function diag(calcular){
    var sexo = document.getElementById('sexo').value
    if(sexo == 'masc'){
        if (calcular<20){
            diagValor.innerHTML = 'Abaixo do peso'
            // img.src = 'img/IMC6.png'
        }
        else if(calcular >= 20 && calcular<25){
            diagValor.innerHTML = 'Normal'
        }
        else if(calcular>=25 && calcular<30){
            diagValor.innerHTML = 'Obesidade leve'
        }
        else if(calcular>=30 && calcular<35){
            diagValor.innerHTML = 'Obesidade grau I'
        }
        else if(calcular>=40){
            diagValor.innerHTML = 'Obesidade grau III'
        }
        else{
            diagValor.innerHTML = 'Obesidade grau II'
        }
    }
    else if(sexo == 'fem'){
        if (calcular<19){
            diagValor.innerHTML = 'Abaixo do peso'
            img = img.setAttribute('src','imc1.png')
        }
        else if(calcular >= 19 && calcular<24){
            diagValor.innerHTML = 'Normal'
        }
        else if(calcular>=24 && calcular<29){
            diagValor.innerHTML = 'Obesidade leve'
        }
        else if(calcular>=29 && calcular<34){
            diagValor.innerHTML = 'Obesidade grau I'
        }
        else if(calcular>=39){
            diagValor.innerHTML = 'Obesidade grau III'
        }
        else{
            diagValor.innerHTML = 'Obesidade grau II'
        }
    }
    else{
        diagValor.innerHTML = 'Erro de dados'
    }
}

function limpa(){
    peso.value = ""
    altura.value = ""
    resultIMC.innerHTML = ""
    diagValor.innerHTML = ""
    genero.value = ""
}