// Aula 4 *****************************

//CLASSLIST ***************************
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); 
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona se nao conter e remove a classe se existir
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');


//ATTRIBUTES *************************
// Retorna uma array-like com os atributos do elemento

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // rewtorna o primeiro atributo

//getATTRIBUTE E setATTRIBUTE **************************
// Métodos que retornam ou definem de acordo com atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // altera a definição do alt
img.hasAttribute('id'); // true ou false
img.removeAttribute('alt'); // remove o alt
//img.hasAttribute(); // true ou false se tem algum atributo

// mais comum metodos de get e set 


//READ ONLY VS WRITABLE ***************************
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais1 = document.querySelector('.animais');

//animais1.className; // string com o nome das classes
//animais1.className = 'azul'; // substitui completamente a string
//animais1.className += 'vermelho'; // adiciona vermelho a string

animais1.attributes = 'class="ativo"'; // não funciona, read-only
// Podemos modificar o valor de uma propriedade com objeto.propriedade = ''