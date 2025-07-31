const form = document.querySelector('form');
const geladinhos = document.querySelector('#geladinhos');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const sendForm = async(bodyObject) => { //o parâmetro bodyObject indica que o corpo da requisição será um objeto
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(bodyObject),
            headers: {
                'Content-type': 'application/json',
            },
        });

        if (!resposta.ok) {
            throw new Error('Ops! Algo deu errado no POST!');
        }
    } catch (err) {
        throw err;
    }
}

form.addEventListener('submit',  async (evento) => { //o form aguarda o evento de submit, e assim que o submit acontecer a função (evento) é executada
    const checkboxMarcado = Array.from(checkboxes).some(item => item.checked);
    evento.preventDefault();

    if(checkboxMarcado) {
        const formData = new FormData(form); //formData é uma API, nativa do JS, que permite manipular os dados de um formulário mais facilmente — mas é preciso converter os dados para um objeto 
        //formData.entries(); — esse método retorna um iterador(estrutura) que contém os pares chave/valor dos campos do formulário — e depois transformar em um objeto
        const newBody = Object.fromEntries(formData.entries()); //o Object.fromEntries() é uma interface que transforma o iterador em um objeto

        newBody.geladinhos = formData.getAll('geladinhos'); //o método getAll() retorna todos os valores do formulário, formando um array ao invés de um único valor

        try {
            await sendForm(newBody);
            document.body.innerHTML = '<h1> Formulário submetido com sucesso! </h1>'
        } catch (err) {
            document.body.innerHTML = '<h1> Ops! Algo deu errado ao submeter o formulário! </h1>'
        }
        
    } else {
        const feedback = document.createElement('p');
        feedback.innerHTML = 'preencha ao menos 1 checkbox';
        feedback.style.color = 'red';

        geladinhos.appendChild(feedback);
    }
})

