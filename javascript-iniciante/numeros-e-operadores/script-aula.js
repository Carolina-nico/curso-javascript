//AULA 3  *************************
//OPERADORES ARITMÉTICOS

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

console.log(expoente);

//OPERADORES ARITMÉTICOS (STRINGS)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

//A ORDEM IMPORTA
//Começa por multiplicação e divisão, depois por soma e subtração (parenteses para priorizar uma expresão).

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(total3);

//OPERADORES ARITMÉTICOS UNÁRIOS
//Mesma coisa para o decremento --x

var x = 5;
console.log(x++); // 5
//console.log(++x); // 6

//funciona para somar com 1. ex: (x = x + 1 ); ou (x = x - 1);


// O + e - tenta transformar o valor seguinte em número.
// o - antes de um número torna ele negativo.

var frase = 'Isso é um teste'; 
+frase; // NaN
-frase; // NaN

var idade = '28'; 
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 
// ^ colocando o + ou - na frente da string, faz com que ele vire um  número

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1