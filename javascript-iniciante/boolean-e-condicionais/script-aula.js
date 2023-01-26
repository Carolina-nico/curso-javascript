//AULA 4  *************************
//BOOLEAN ******
//Existem dois valores booleanos (false ou true)

var possuiGraduacao = true;
var possuiDoutorado = false;


//CONDICIONAIS IF OR FALSE ******
//Verificar se uma expressão é verdadeira com 'if', caso contrario 'else' será ativado.

// O valor dentro dos parênteses sempre será avaliado em false ou true.


if (possuiDoutorado) {
   console.log('É verdade'); //Si a condição for true, retornara 'tenho doutorado'
} else if (possuiGraduacao) {
   console.log('Tem graduacao porem nao tem doutorado'); //Mas si a condicao acima for false, verificar a nova condicao e retorne 'Tem graducao porem nao tem doutorado'
} else {
   console.log('Não possui') // Si as duas condicoes forem false, retornará 'nao possui'
}

//TRUTHY E FALSY *******
//Existem valores que retornam 'true' e outros que retornam 'false' quando verificados em uma expressão booleana.

//Falsy
if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if ('') // ou "" ou ``

   //todo o resto é truthy

   //OPERADORES LÓGICO DE NEGAÇÃO! ****** 
   // o operador !, nega uma operacao booleana. Ou seja, !true é igual a false

   //Truthy
   if (!true) //false
   if (!1) //false
   if (!'') //true
   if (!'') //true
   if (!!' ') //true
   if (!!'') //false

                     // Voce pode utilizar o !! para verificar se uma expressao é truthy ou falsy

                     //OPERADORES DE COMPARAÇÃO ******
                     // Vão sempre retornar um valor booleano.

                     10 > 5; //true
5 > 10; //false
20 < 5; //false
10 <= 10; //true
10 >= 11; //false

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false 
10 !== '10'; // true

//OPERADORES LÓGICOS && ******
// '&&' Compara se uma expressao 'e' a outra é verdadeira

// Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.

true && true; // true
true && false; // false
false && false; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

if ((5 - 5) && (5 + 5)) {
   console.log('Verdadeiro');
} else {
   console.log('Falso');
} // false

//OPERADORES LÓGICOS || ******
// || Compara se uma expressão 'ou' outra é verdade

true || true; //true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); // true
// Retorna o primerio valor true que excontrar


//SWITCH ******
// Com o switch voce pode verificar se uma variavel é igual à diferentes valores utilizando o 'case'. Caso ela seja igual, voce pode faze alguma  coisa e utilizar a palavra chave 'break;' paara cancelar a continuacao. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Azul';

switch (corFavorita) {
   case 'Azul':
      console.log('Olhe para o céu.');
      break;
   case 'Vermelho':
      console.log('Olhe para o rosas.');
      break;
   case 'Amarelo':
      console.log('Olhe para o sol.');
}