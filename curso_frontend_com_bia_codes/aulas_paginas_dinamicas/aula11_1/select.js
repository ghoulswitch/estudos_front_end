//seleciona elementos por id
const tituloCustom = document.getElementById("tituloCustomizado");

console.log("Titulo customizado: ", tituloCustom);

//seleciona todos os elementos de uma tag html específica
const butoes = document.getElementsByTagName("button");

console.log("Tags buttons da página: ", butoes);

//seleciona todos os elementos com uma mesma classe; não necessariamente da mesma tag
const butoesEstilizados = document.getElementsByClassName("paragrafoEstilizado");

console.log("Elementos com a mesma classe: ", butoesEstilizados);

//seleciona qualquer tipo de elemento no documento html; ele imprime apenas o primeiro e ignora o resto, diferente do querySelectorAll
const boldtexts = document.querySelector(".boldText");

console.log("Classe bold text: ", boldtexts);
