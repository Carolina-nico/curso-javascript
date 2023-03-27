//AULA 8 **************************

//ARRAY *********************
// É uma grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma unica variavel.

// Acesse um elemento da array utilizando [n]

var videoGames = ['switch','PS4', 'XBox'];

console.log(videoGames[0]) //switch
console.log(videoGames[2]) //XBox

//MÉTODOS E PORPRIEDADES DE UMA ARRAY *****************

videoGames.pop() // Remove o ultimo item e retorna ele
videoGames.push('3DS') // Adiciona ao final da array
videoGames.length; // 3

// Existem diversos outros métodos como map, reduce, forEach e mais.

// FOR LOOP **********************
// Fazem algo repetidamente até que uma condição seja atingida.
// O for loop possui 3 partes, início, condição e incremento

for (var numero = 0; numero <= 10; numero ++) {
   console.log(numero);
}

//WHILE LOOP ******************
// O for loops é o mais comum 

var i = 0;
while (i < 10) {
   console.log(i);
   i++;
} // Retorna de 0 a 9 no console.


//ARRAYS E LOOPS ************************
//O for loop é o mais comum

var videoGames2 = ['Switch', 'PS4', 'XBox', 'Nintendo'];
for (var i = 0; i < videoGames2.length; i++) {
   console.log(videoGames2[i]);
   if (videoGames2[i] === 'XBox') {
      break; //BREAK - o loop irá parar caso encontre a palavra pro break
   }
}

//forEACH ******************************
//forEach é um método que executa uma fgunção para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

//Podemos passar os seguinte parâmetros item, index e array.

var videoGames3 = ['Switch', 'PS4', 'XBox', 'Nintendo'];
videoGames3.forEach(function(item, index, array) {
   console.log(item, index, array);
}); //o argumento item será atribuido dinamicamente


//NÃO CONFUNDA COM SINTAXE ********************
// funciona da mesma forma, mas é uma pratica de escrita ruim.

var numero = 0;
var maximo = 50;
for (;numero < maximo;) {
   console.log(numero);
   numero++
}

