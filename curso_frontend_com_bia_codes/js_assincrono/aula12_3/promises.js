const catsFacts = () => {
    fetch('https://meowfacts.herokuapp.com/').then((resposta) => resposta.json())
    .then((batata) => console.log(batata));
}

catsFacts();