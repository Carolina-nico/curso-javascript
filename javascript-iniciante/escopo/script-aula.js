//AULA 10 **************************

// ESCOPO DE FUNÇÃO *****************

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
// escopo evita o conflito entre nomes de variáveis.

function mostrarCarro() {
   var carro = 'Fusca'
   console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Erro, carro is not defined

// VARIÁVEL GLOBAL (ERRO) ***************************

// Declarar variáveis sem a palavra chave 'var, const ou let', cria uma variável que pode se acessar em qualquer escopo(global). Isso é um erro.
// 'use strict' impedi isso.


// ESCOPO DE FUNÇÃO (PAI) ********************

// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = 'Fusca'

function mostrarCarro() {
   var frase = `Meu carro é um ${carro}`
   console.log(frase);
}

mostrarCarro(); // Meu carro é um fusca
console.log(carro); // Fusca

// ESCOPO DE BLOCO ****************************

// Variáveis criadas com var, vazam o bloco. Por isso com a introdução ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo dem bloco.

if(true) {
   let carro = 'Corsa';
   console.log(carro);
}
console.log(carro) // erro

// VAR VAZA O BLOCO *********************
// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

// {} CRIA UM BLOCO ******************
// Chaves criam um escopo de bloco, não confundir com a criação de objetos = {}

{
   var carro = 'Kwid';
   const ano = 2018;
}
console.log(carro); // carro
//console.log(ano); // erro ano is not defined

// FOR LOOP *********************
// Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizda irá vazar e existir fora do loop.

for(let i = 0; i < 10; i++) {
   console.log(`Número ${i}`);
}
//console.log(i);
//FOR LOOP COM LET *****
// Com o let evita que o numero vaze


// CONST ************************

// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const semana = 'Sexta';
// semana = 'Quinta'; // erro, tentou modificar a const

console.log(semana);

const data = {
   nascimento: 2018,
   mes: 'Maio',
   dia: 21,
}

data.dia = 29;
data.mes = 'janeiro'; // alterados


// LET ************************

// Mantém o escopo no bloco, impede a redeclaração MAS PERMITE a modificação do valor da variável.

let ano;
ano = 2020;
ano++;
console.log(ano); // 2021

//let ano = 2021; // erro, redeclarou a variavél