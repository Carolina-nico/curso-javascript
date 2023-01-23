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