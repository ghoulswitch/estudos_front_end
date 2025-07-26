const catsFacts = () => {
    fetch('https://meowfacts.herokuapp.com/') //o fetch retorna uma promise
    .then((resposta) => resposta.json()) //converte a resposta par JSON, pois é o formato mais fácil de trabalhar
    .then((batata) => console.log(batata)); //aqui 'batata' é o objeto JSON retornando pela API
}

catsFacts();