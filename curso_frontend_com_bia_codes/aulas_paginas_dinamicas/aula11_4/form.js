const form = document.querySelector('form');

//Evento de formulário
form.addEventListener('submit', (evento) => {
    //previni o comportamento padrão do botão dentro de um form
    evento.preventDefault();

    console.log("Enviando seus dados do formulário....")
})