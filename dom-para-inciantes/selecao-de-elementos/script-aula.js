// AULA 2*******************************

const animais = document.getElementById('animais');
console.log(animais);

//CLASSE E TAG ******************************

//getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.


//Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');
console.log(gridSection);
console.log(contato);

//Seleciona todas as UL'S, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

//Retorna o primeiro elemento
console.log(gridSection[0]);


//SELETOR GERAL UNICO ***************************
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS

const animais1 = document.querySelector('.animais');
const contato1 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUL = document.querySelector('ul');

console.log(contato1);
console.log(ultimoItem);
console.log(linkCSS);
console.log(primeiroUL);


//Busca dentro do UL apenas
const navItem = primeiroUL.querySelector('li');
console.log(navItem);


//SELETOR GERAL LISTA ***************************
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

console.log(gridSection1);
console.log(listas);
console.log(titulos);
console.log(fotosAnimais);

//Retorna o segundo elemento 
console.log(gridSection[1]);


//ARRAY-LIKE *********************************
//HTMLCollection e NodeList são array-like, parecem um array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection2 = document.querySelectorAll('.grid-section');

gridSection2.forEach(function(gridItem, index, array) {
   gridItem.classList.add('azul');
   console.log(index); // index do item na array
   console.log(array); // a array completa
});

//É possivel transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
