//ALTERANDO O CONTEÚDO DE ELEMENTOS

//substitui o conteúdo do elemento div buttonsContainer
const containerBotoes = document.querySelector(".buttonsContainer");

//substitui o container de botoes por um novo elemento
// containerBotoes.innerHTML = "<button> Novo Botão </button>"

//substitui apenas o texto do elemento
const primeiroTitulo = document.querySelector('h1');
primeiroTitulo.innerText = 'Novo título';


//ALTERANDO ESTILOS
containerBotoes.style.backgroundColor = 'blue';


//ALTERANDO ATRIBUTOS DAS TAGS
const ultimoTitulo = document.getElementById('tituloQuatro');
tituloQuatro.setAttribute('id', 'tituloCustomizado'); //primeiro o id é setado e depois substitui id= "tituloCustomizado"

//outra forma de alterar o id
const terceiroTitulo = document.querySelector('h2:nth-of-type(3)'); //pega o terceiro h2
terceiroTitulo.setAttribute('id', 'tituloLaranja');

//removendo o id de um elemento
ultimoTitulo.removeAttribute('id');


//ADICIONANDO E REMOVENDO ELEMENTOS NA TELA 
const novoTitulo = document.createElement('h3');
novoTitulo.innerText = 'Título novo!'; //adiciona um texto ao novo elemento h3

document.body.appendChild(novoTitulo); //adiciona o novo elemento no final do body

//adicionando um novo botão ao conatiner dos botões
const novoBotao = document.createElement('butoon');
novoBotao.innerText = 'Novo botão';

containerBotoes.appendChild(novoBotao);

//novoBotao.setAttribute('class', 'botaoEstilizado'); //adiciona uma classe (botaoEstilizado) ao novo botão
novoBotao.classList.add('botaoEstilizado', 'boldText');