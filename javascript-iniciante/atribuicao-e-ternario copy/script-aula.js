//AULA 9 **************************

// OPERADORES DE ATRIBUIÇÃO **************************

var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0) modolo
x **= y; // x = x ** y (9765625) expoente

console.log();

// OPERADOR TERNÁRIO **********************

// Abreviação de condicionais com if e else
// Geralmente utilizado quando precisamos atribuir um valor para variável, dependendo de uma condição.

var idade = 19;
var podeBeber = (idade <= 18) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);
/* Condição 
? true 
: false
*/


// IF ABREVIADO ********************
// Não é necessario abrir e fechar as chaves {} quando retornamos apenas uma linha de codigo.

var possuiFaculdade = true;

if(possuiFaculdade)
console.log('Possui faculdade');
else
console.log('Não possui faculdade');