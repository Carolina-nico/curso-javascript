// Aula 5 *****************************


// HEIGHT E WIDTH **************************
// Estas são prorpiedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.

const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight); // height + padding
console.log(listaAnimais.offsetHeight); // height + padding + border
console.log(listaAnimais.scrollHeight); // height total, mesmo dentro do scroll
//Mesma coisa com o Widht. clienteWidht

// offsetTOP e offsetLeft **********************

//Distancia entre o topo do elemento e o todo da pagina
console.log(listaAnimais.offsetTop);

//Distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
console.log(listaAnimais.offsetLeft);

// getBoundingClientRect() *************************
//Método que retorna um objeto com valores de widht, height, distancias do elemento e mais.

const primeiroh2 = document.querySelector('h2');

const rect = primeiroh2.getBoundingClientRect();
console.log(rect.height); //height do elemento
console.log(rect.widht); //widht do elemento
console.log(rect.top); //distancia entre o topo do elemento e o scroll

// WINDOW **************************

console.log(
   window.innerWidth, //widht da janela
   window.innerHeight, // height da janela
   window.outerWidth, //soma dev tools também
   window.outerHeight, //soma a bara de endereco

   window.pageXOffset, //distancia total do scroll horizontal
   window.pageYOffset //distancia total do scroll vertical
);

if(window.innerWidth < 600) {
   console.log('Tela menos que 600px');
}

// matchMedia() **************************
//Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
   console.log('Tela menor que 600px')
} else {
   console.log('Tela maior que 600px')
}