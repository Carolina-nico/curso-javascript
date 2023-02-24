// EXERCICIO 6 **********

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoa = {
   nome: 'Carolina',
   sobrenome: 'Santos',
   idade: 24,
   faculdade: 'Não tem',
}
console.log(dadosPessoa);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoa.nomeCompleto = function () {
   return `${this.nome} ${this.sobrenome}`
}
console.log(dadosPessoa.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
   preco: 1000,
   portas: 4,
   marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
   raca: 'labrador',
   cor: 'preto',
   idade: '10 anos',
   latir(pessoa) {
      if (pessoa === 'homem') {
         return 'Latir';
      } else {
         return 'Nada';
      }
   }
}
console.log(cachorro.latir('homem'));