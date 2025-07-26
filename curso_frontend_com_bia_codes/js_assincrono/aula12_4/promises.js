const catsFacts = () => { 
    fetch('https://meowfacts.herokuapp.com/') 
    .then((resposta) => resposta.json()) 
    .then((batata) => console.log(batata)) 
    .catch((error) => console.log(error)); //captura erros caso a requisição falhe
}

catsFacts();

//Pode acontecer de ocorrer uma Trick, que é quando ocorre um erro na requisição, mas o servidor retorna como uma resposta válida, como um JSON com uma mensagem de erro, e não um erro de rede. Ou seja, o catch não é acionado. Por isso, é importante verificar o status de rede da resposta antes de converter para JSON.