// EXERCICIOS

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);


// Retorne no console apenas as imagens que começaram com a palavra imagem
const animaisFotos = document.querySelectorAll('img[src^= "img/imagem"]')
console.log(animaisFotos);


// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^= "#"]');
console.log(linkInterno);


// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao h2');
console.log(animaisDescricao);


// Selecione o último p do site
const ultimoP = document.querySelector('footer p:last-child');
console.log(ultimoP);

//OU

const p = document.querySelectorAll('p');
console.log(p[p.length - 1]);