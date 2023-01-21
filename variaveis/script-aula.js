//AULA 1 **************************

// VARIAVEIS
// são responsaveis por guardar dados na memória. Evitam repetição. Inicia com a palavra 'var, let, ou const'.

// Nomes podem conter numero mas nao iniciar com eles, pode iniciar com $, _, ou letras.
// Case sensitive - nome é diferente de Nome.
// Camel case - é comum nomearmos assim: abrirModal 
// Nao utilizar palavras reservadas.

var nome = 'Carolina';
var idade = 23;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome);

var preco = 25;
var valorComprado = 5;
var totalPreco = valorComprado * preco;

console.log(totalPreco);

var sobrenome = 'Santos', 
    cidade = 'São Paulo';

console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);


// // Hoisting - são movidas para cima do codigo, porem o valor atribuido nao é modivo.

console.log(comida);
var comida = 'Pizza';
// underfined

var comida = 'Pizza';
console.log(comida);
// retorna pizza


// Mudar o valor atribuido - é possivel alterar os valores declarados nas variaveis com var e let. Porem nao é possivel modificar o valor declarado com const. 

var time = 'Vasco';
time = 'Corinthians';
// alteração do valor declarado.
console.log(time);

//AULA 2 ***************************

//  7 TIPOS DE DADOS
// todos sao primitivos exceto os objetos.
// Primitivos sao dados imutaveis.

var nome = 'Carol'; //String
var idade = 23; //Number
var possuiFaculdade = true; //Boolean
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol() //Symbol
var novoObjeto = {} //Object

console.log(typeof nome); //typeof identifica qual dado estou chamando.

// Template String - deve passar expressoes / variaveis dentro de ${}

var gols = 1000;
var frase1 = `Romário fez ${gols + 3} gols`

console.log(frase1);

var idade = 2e3; //Ex: 2e3 = 2000. Depois do 'e' completa com '0' a quantidade que for identificada.

console.log(idade);


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
