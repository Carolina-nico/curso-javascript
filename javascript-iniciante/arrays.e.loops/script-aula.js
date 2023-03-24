//AULA 7 **************************

//TUDO É OBJETO*******************
//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos.Por isso são objetos.
//Uma string herda propriedades e métodos do construtor String()

var nome = 'Carol';

nome.length; // 5
nome.charAt(4); // 'l'
nome.replace('ro', 'ca'); // 'Casal'

console.log(nome.replace('ro', 'ca'));

//NÚMEROS **********************
// Por um breve momento o número é envolvio em um Objeto(coerção), tendo acesso assim as suas propriedades e métodos.

var altura = 1.8;

altura.toString(); // '1.8' transforma o numero em uma string
altura.toFixed(); // '2' arredonda o número


//FUNÇÕES ***********************

function areaQuadrado(lado) {
   return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//   return lado * lado;
//}"

areaQuadrado.length; // 1

//EMENTOS DO DOM **********************
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona class azul
btn.innerHTML; //'Clique'
btn.addEventListener('click', function() {
    console.log('Clicou')
})

