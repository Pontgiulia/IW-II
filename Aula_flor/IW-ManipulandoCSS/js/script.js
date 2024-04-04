/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/flor.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "#a9a9a9";
titulo.style.color = "#d3d3d3";
titulo.style.backgroundColor = "#878787";
titulo.style.borderBottom = "5px solid #424242";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnpink = document.querySelector('#btpink')

let btnblue = document.querySelector('#btblue')

let btnyellow = document.querySelector('#btyellow')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnpink.addEventListener('click', modoPink)
btnblue.addEventListener('click', modoBlue)
btnyellow.addEventListener('click', modoYellow)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    imagem.setAttribute('src', 'img/florpreta.jpg')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
    

}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    imagem.setAttribute('src', 'img/flor.jpg')
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
    tela.classList.add("light");
    


}

function modoPink() {
    //event.preventDefault();
    console.log('modo pink')
    imagem.setAttribute('src', 'img/florRosa.jpg')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
    tela.classList.add("pink");
    
    

}

function modoBlue() {
    //event.preventDefault();
    console.log('modo blue')
    imagem.setAttribute('src', 'img/flores_azuis.jpg')
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("light");
    tela.classList.remove("yellow");
    tela.classList.add("blue");
    
}

function modoYellow() {
    //event.preventDefault();
    console.log('modo yellow')
    imagem.setAttribute('src', 'img/floramarela.jpg')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("blue");
    tela.classList.remove("pink");
    tela.classList.add("yellow");
    

}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
