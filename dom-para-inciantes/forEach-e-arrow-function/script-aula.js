// Aula 3 *****************************

//forEach ****************
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imgs = document.querySelectorAll('img');

imgs.forEach(function (item) {
   console.log(item);
});

//PARAMETROS DO forEACH *************************
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetro: valorAtual, index e array.

const imagens = document.querySelectorAll('img');

imagens.forEach(function (valorAtual, index, array) {
   console.log(valorAtual); // o item atual no loop
   console.log(index); // o número do index
   console.log(array); // a array completa
});

//forEACH E ARRAY **************************
//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
   console.log(item)
});

//ARROW FUNCTION **************************
// Sintaxe curta em relação a fucntion expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imagem = document.querySelectorAll('img');

imagem.forEach((item, index) => {
   console.log(item, index);
});

//ARGUMENTOS E PARÂNTESES ************************

const imagem1 = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imagem1.forEach(item => {
   console.log(item);
});

// multiplos argumentows precisam de parênteses 
imagem1.forEach((item, index) => {
   console.log(item, index);
});

// sem argumetos precisa dos parênteses, mesmo vazio
let i = 0;
 imagem1.forEach(() => {
    console.log(i++);
});


//RETURN *******************
//É possível omitir as chaves {} para uma função que retorna uma linha.

const imagem2 = document.querySelectorAll('img');

imagem2.forEach(item =>
   console.log(item)
);

imgs.forEach(item => console.log(item));


