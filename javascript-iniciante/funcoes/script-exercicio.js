// EXERCICIO 5 **********

// Crie uma função para verificar se um valor é Truthy
function truthy(valor) {
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
   return lado + lado + lado + lado;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
   var nome = 'Carolina'
   var sobrenome = 'Silva Santos'
   return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto());

// Crie uma função que verifica se um número é par
function numeroPar(numeroPar) {
   return numeroPar % 2 == 0;
}
console.log(numeroPar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
   console.log('Carolina Silva Santos');
});


// Corrija o erro abaixo 
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(30));
console.log(jaVisitei(20));
