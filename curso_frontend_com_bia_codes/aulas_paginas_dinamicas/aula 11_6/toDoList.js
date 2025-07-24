const botao = document.querySelector('button');
const botaoLimpar = document.getElementById("botaoLimpar");
const inputValue = document.querySelector('input');
const tasksList = document.querySelector('.tasksContainer'); //por tasksContainer ser uma classe é necessário adicionar o ponto antes!!!!

botao.addEventListener('click', () => {
    if (inputValue.value) { //verifica se o input não está vazio, se estiver não adiciona nada
        const newTask = document.createElement('li');
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        newTask.appendChild(checkbox); //adicionando o checkbox primeiro

        checkbox.addEventListener('click', () => {
            if (checkbox.checked){
                newTask.style.textDecoration = 'line-through dashed';
            } else {
                newTask.style.textDecoration = 'none';
            }
        })

        const texto = document.createTextNode(inputValue.value); //cria um nó de texto com o valor do input, que será o texto da tarefa
        newTask.appendChild(texto) //adiciona o texto ao lado do checkbox

        tasksList.appendChild(newTask);
        inputValue.value = ''; //limpa o campo de input após adicionar a tarefa
    } 
})

botaoLimpar.addEventListener('click', () => {
    tasksList.innerHTML = '';
})
