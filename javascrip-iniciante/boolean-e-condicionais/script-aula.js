//AULA 4  *************************
//BOOLEAN ******
//Existem dois valorez booleanos (false ou true)

var possuiGraduacao = true;
var possuiDoutorado = false;


//CONDICIONAIS IF OR FALSE ******
//Verificar se uma expressão é verdadeira com 'if', caso contrario 'else' será ativado.

// O valor dentro dos parênteses sempre será avaliado em false ou true.


if(possuiDoutorado) {
   console.log('É verdade'); //Si a condição for true, retornara 'tenho doutorado'
} else if(possuiGraduacao) {
   console.log('Tem graduacao porem nao tem doutorado'); //Mas si a condicao acima for false, verificar a nova condicao e retorne 'Tem graducao porem nao tem doutorado'
} else {
   console.log('Não possui') // Si as duas condicoes forem false, retornará 'nao possui'
}

//TRUTHY E FALSY *******
//Existem valores que retornam 'true' e outros que retornam 'false' quando verificados em uma expressão booleana.

//Falsy
if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if('') // ou "" ou ``

//todo o resto é truthy

//OPERADO LÓGICO DE NEGACAO! ****** 
// o operado !, nega uma operacao booleana. Ou seja, !true é igaul a false

//Truthy
if(!true) //false
if(!1) //false
if(!'') //true
if(!'') //true
if(!!' ') //true
if(!!'') //false

// Voce posde outilizar o !! para verificar se uma expressao é truthy ou falsy

//Operdaores de comparação ******
// Vão sempre retornar um valor booleano.

10 > 5; //true
5 > 10; //false
20 < 5; //false
10 <= 10; //true
10 >= 11; //false