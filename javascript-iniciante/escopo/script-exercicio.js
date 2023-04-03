// EXERCICIO 10 **********

// Por qual motivo o código abaixo retorna com erros?
   var cor = 'preto';
{
   const marca = 'Fiat';
   let portas = 4;

console.log(cor, marca, portas); // const e let funcionam dentro de bloco, o var funciona tanto dentro como fora. Mas o erro acontecia pois o console.log estava fora do escopo de bloco.
}


// Como corrigir o erro abaixo?
function somarDois(x) {
   const dois = 2;
   return x + dois;
}

function dividirDois(x) {
   const dois = 2 // tem que definir o valor de variavel, pois é mais de uma funcition, ou pode criar const antes da funcition, que funcionara nos dois.
   return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));


 // O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
   console.log(numero); // a variavel let nao alterara o numero de fora, sempre sera prioridade do que esta dentro do bloco.
}

const total = 10 * numero;
console.log(total);
// agora esse contexto apenas acessa a variavel de cima, o for não é atingido
