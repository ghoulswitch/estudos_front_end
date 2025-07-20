const botao = document.querySelector('button');

botao.addEventListener('click', () => {
    const tasksList = document.querySelector('.tasksContainer'); //por tasksContainer ser uma classe é necessário adicionar o ponto antes!!!!
    const inputValue = document.querySelector('input');
    const newTask = document.createElement('li');
    newTask.innerText = inputValue.value;

    if (inputValue.value) //verifica se o input não está vazio, se estiver não adiciona nada
    tasksList.appendChild(newTask);
    inputValue.value = ''; //limpa o campo de input após adicionar a tarefa
})