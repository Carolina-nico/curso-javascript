// Verifique a distância da primeira imagem
// em relação ao topo da página
const widthImagem = document.querySelector('img');

const img = widthImagem.offsetTop;
console.log(img);

// Retorne a soma da largura de todas as imagens
//Feito com professor.
function somaImagem() {
   const imgs = document.querySelectorAll('img');

   let soma = 0;

   imgs.forEach((imagem) => {
      soma = soma + imagem.offsetWidth;
   });
   console.log(soma);
}

window.onload = function () {
   somaImagem();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
   const linkWidth = link.offsetWidth;
   const linkHeight = link.offsetHeight;

   if(linkWidth >= 48 && linkHeight >= 48) {
      console.log(link, 'Possui acessibilidade')
   } else {
      console.log(link, 'Não possui acessibilidade')
   }
});
console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


const telaMobile = window.matchMedia('(max-width: 700px)').matches;

if(telaMobile) {
   const menu = document.querySelector('.menu');
   menu.classList.add('menu-mobile')
};