let tela = document.querySelector("#tela-de-pintura");/*é um comando do JS para buscar um elemento dentro do seu html... utilizando as mesmas regras de seleção que usamos no css.*/

let corAzul = document.querySelector("#pincel-azul");
let corVermelha = document.querySelector("#pincel-vermelho");
let corLaranja = document.querySelector("#pincel-laranja")
let corAmarela = document.querySelector("#pincel-amarelo");
let corVerde = document.querySelector("#pincel-verde");
let corLilas = document.querySelector("#pincel-lilas");
let corRosa = document.querySelector("#pincel-rosa");
let corCiano = document.querySelector("#pincel-ciano");
let corCinza = document.querySelector("#pincel-cinza");

corAzul.addEventListener("click", azul);
corVermelha.addEventListener("click", vermelho);
corLaranja.addEventListener("click", laranja);
corAmarela.addEventListener("click", amarelo);
corVerde.addEventListener("click", verde);
corLilas.addEventListener("click", lilas);
corRosa.addEventListener("click", rosa);
corCiano.addEventListener("click", ciano);
corCinza.addEventListener("click", cinza);

let nomeCor = document.querySelector("h3")

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul"; /*é uma propriedade de elementos html no js usada para ler e alterar todo o conteúdo de uma tag*/
}

function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho";
}

function laranja(){
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja";
}
function amarelo(){
    tela.style.background = "gold";
    nomeCor.innerHTML = "Amarelo";
}
function verde(){
    tela.style.background = "greenyellow";
    nomeCor.innerHTML = "Verde";
}
function lilas(){
    tela.style.background = "plum";
    nomeCor.innerHTML = "Lilás";
}
function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "Rosa";
}
function ciano(){
    tela.style.background = "cyan";
    nomeCor.innerHTML = "Ciano";
}
function cinza(){
    tela.style.background = "grey";
    nomeCor.innerHTML = "Cinza";
}