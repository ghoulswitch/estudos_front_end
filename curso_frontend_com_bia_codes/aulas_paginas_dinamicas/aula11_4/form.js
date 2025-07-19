const form = document.querySelector('form');

//Evento de formulário
//form.addEventListener('submit', (evento) => {
    //previni o comportamento padrão do botão dentro de um form
    //evento.preventDefault();

    //console.log("Enviando seus dados do formulário....")
//})

//Validando se o checkbox está sendo preenchido/selecionado
const geladinhos = document.querySelector('#geladinhos');
const checkboxes = document.querySelectorAll('input[type="checkbox"]'); //seleciona todos os checkboxes 

//Evento de formulário
form.addEventListener('submit', (evento) => {
    const checkboxMarcado = Array.from(checkboxes).some(item => item.checked); //verfiica se algum checkbox está marcado usando Array.from, que converte o NodeList em um array, e .some para verificar se algum item está marcado, com a propriedade .checked
    evento.preventDefault(); //previni o comportamento padrão do botão dentro de um form

    //condição se os dados do formu serão enviados
    if (checkboxMarcado){
    console.log("Enviando seus dados do formulário....")
    document.body.innerHTML = '<h1> Formulário submetido com sucesso! </h1>'
    } else {
        const feedback = document.createElement('p');
        feedback.innerText = 'Preencha ao menos uma opção de sabor!';
        feedback.style.color = 'red';

        geladinhos.appendChild(feedback); //o appendchild adiciona o elemento feedback como filho do elemento geladinhos, ou seja, o parágrafo será exibido abaixo do checkbox
    }
})