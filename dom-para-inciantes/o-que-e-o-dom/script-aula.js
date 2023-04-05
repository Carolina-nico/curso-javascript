// AULA 1 **************************

// Document Object Model (DOM) ********************

// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possivel manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser


// Window e Document ****************************
// São os objetos principais do DOM, boa parte da manipulação é feita atráves dos seus métodos e propriedades.
// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades

window.alert('Isso é um alerta');
alert('Isso é um alerta') // funciona das duas formas

document.querySelector('h1'); // seleciona o primeiro h1
document.body; //retorna o body

// NODE ***********************************
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node. 

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retornar o id
titulo.offsetHeight; // retorna a altura do elemento


function callbackh1() {
   console.log('Clicou em', titulo.innerText);
}
titulo.addEventListener('click', callbackh1);
// ativa a função callback ao click no titulo


