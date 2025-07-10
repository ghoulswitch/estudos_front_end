//EVENTOS DE MOUSE
const botao = document.querySelector('button');

const cliqueonMouse = () => {
    botao.innerText = 'Clicou!'
}

const mouseEntra = () => {
    botao.innerText = 'Mouse entrou!'
}

const mouseSai = () => {
    botao.innerText = 'Mouse saiu!'
}

//com o botão no html refatorado
botao.addEventListener('click', cliqueonMouse);
botao.addEventListener('mouseenter', mouseEntra);
botao.addEventListener('mouseleave', mouseSai);

//EVENTOS DE TECLADO

//const novoTexto = document.createElement('h2');
//novoTexto.innerText = 'Uma tecla foi pressionada!'

//document.body.addEventListener("keydown", () => {
//    document.body.appendChild(novoTexto);
//})

//é diferente de 

document.body.addEventListener("keydown", (evento) => {
    const novoTexto = document.createElement('h2');
    novoTexto.innerText = `A tecla ${evento.key} foi pressionada!`

    document.body.appendChild(novoTexto);
})