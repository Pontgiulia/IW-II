var texto = document.getElementById('texto')
var botao = document.getElementById('botao')

function altertext(){
    texto.innerHTML = 'substituido!!!!';
}

botao.addEventListener('click', altertext);

