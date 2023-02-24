//AULA 6 **************************

//OBJETOS **************************

// Conjunto de variaveis e funcoes, que são chamadas de propiedades e metodos.
// Propriedades e metodos consistem em nome (chave) e valor.

var pessoa = {
   nome: 'Carol',
   idade: 24,
}

console.log(pessoa.idade);

//METODOS ***********************

// É uma propriedade que possui uma funcao no local do seu valor

var quadrado = {
   lados: 4,
   area: function(lado) {
      return lado * lado;
   },

   perimetro: function (lado) {
      return this.lados * lado //'this' faz referencia. é o proprio objeto
   }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//Abreviação de area: function() {} para: area() {}, no ES6+
var quadrado = {
   lados: 4,
   area(lado) {
      return lado * lado;
   },

   perimetro(lado) {
      return this.lados * lado
   },
}

//ORGANIZAR O CODIGO *************

// Objetos servem para organizar o codigo em pequenas partes reutilizaveis.
// Math: é um objeto nativo de JavaScript. Percebeu que 'console' é um objeto e 'log()' um metodo?

Math.PI; //3,14
Math.random();

var pi = Math.PI; //numero aleatorio
console.log(pi);

//CRIA UM OBJETO ************
//Um objetyo pe criado utilizando as chaves {}

var carro = {}

//DOT NOTATIUON GET******
//Acesse propriedades de um objeto utiolizando o ponto .

var menu = {
width: 900,
height: 50,
backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
menu.color = 'blue';

var bg = menu.backgroundColor;

// ADICIONAR PROPRIEDADES E METODOS ******************
// Basta adicionar um novo nome e definir o valor.

var menu = {
   width: 900,
}

menu.height = 50;
menu.position = 'fixed';

//PALAVRA-CHAVE THIS ****************
//this irá fazer uma referencia ao proprio objeto.
//this ira reetonrar o proprio objeto

var height = 120;
var menu = {
   width: 900,
   height: 50,
   metadeHeight() {
      return this.height / 2 
   }
}
console.log(menu.metadeHeight()); // 25
// sem o this, seria 60 dos 120

//PROTOTIPO E HERANCA*****************
// O objeto herda propriedades e metodos do objeto que foi utilizado para criar o mesmo.
// hasOwnProperty é um metdo de Object

var menu = {
   width: 900,
}

menu.hasOwnProperty('width') //true
menu.hasOwnProperty('height') //false