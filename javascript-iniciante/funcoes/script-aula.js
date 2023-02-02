//AULA 5  *************************

//FUNÇÕES *******

//Bloco de codigo que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
//Chamada de function declaration.

function areaQuadrado(lado) {
   return lado * lado;
}

console.log(areaQuadrado(4)) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4


function pi() {
   return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);


//PARÂMETROS E ARGUMENTORS *********

// parenteses () executam uma função

// Ao "criar" uma função, voce pode definir parâmetros.
// Ao "executar" uma função, voce pode passar argumentos.

//Separa por virgula cada parâmetro. Voce pode definir mais de um parâmetro ou nenhum também.


// peso e altura são parâmetros
function imc(peso, altura) {
   var imc = peso / (altura * altura);
   return imc;
} 

console.log(imc(80, 1.8)); // estes são os argumentos
console.log(imc(60, 1.7)); // estes são os argumentos


//PARÊNTESES EXECUTA A FUNÇÃO *********

// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer.


function corFavorita(cor){
   if(cor === 'azul'){
      return 'Eu gosto do céu azul'
   } else if(cor === 'verde') {
      return 'Eu gosto da natureza'
   } else {
      return 'Eu não gosto de cores'
   }
}

corFavorita('verde'); // No console browser


//ARGUMENTOS PODEM SER FUNÇÕES *********

// Chamadas de 'Callback', geralmente são funções que ocorrem após algum evento.

//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() ou () => {}

addEventListener('click', function(){
   console.log('Oi');
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima


//PODE OU NAO RETORNAR UM VALOR *********

// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir o valor de return ou não

function imc2(peso, altura) {
   const imc = peso / (altura ** 2);
   console.log(imc)
}

imc2(80, 1.6); // retornar o imc
console.log(imc2(80, 1.6)); // retorna o imc e undefined


//VALORES RETORNADOS *********
//Uma função pode retornar qualquer tipo de dado e ate outras funções.

function terceiraIdade(idade) {

   if(typeof idade !== 'number'){
      return 'Informe a sua idade!';
   } else if (idade >= 60) {
      return true;
   } else {
      return false;
}
}
console.log(terceiraIdade(50));
//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.


//ESCOPO *********
//Variaveis e funções definidas dentro de um bloco {}, não são visiveis fora dele.
// A variavel tem que estar do lado de fora da função, encima dele

//CORRETO//
var totalPaises = 193;

function precisoVisitar(paisesVisistados) {
   return `Ainda faltam ${totalPaises - paisesVisitados} paises`
}
console.log(totalPaises);

//INCORRETO//
function precisoVisitar(paisesVisistados) {
   var totalPaises = 193;
   return `Ainda faltam ${totalPaises - paisesVisitados} paises`
}
console.log(totalPaises); // erro, totalPaises não definido


//ESCOPO LÉXICO*********
// Funções conseguem acessar variaveis que foram criadas no contexto pai.

var profissao = 'Designer';

function dados() {
   var nome = 'Carol'
   var idade = 28;
   function outrosDados() {
      var endereco = 'São Paulo';
      var idade = 29;
      return `${nome}, ${idade}, ${endereco}, ${profissao}`;
   }
   return outrosDados();
}

console.log(dados()); // Retorna 'Carol, 29, São Paulo, Designer'
console.log(outrosDados()); // retorna um erro, pois a função esta dentro da funcao dados.

//HOISTING*********
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memoria.

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
   const imc = peso / (altura ** 2);
   console.log(imc);
}