//MÉTODO GET 
//método já implementado automaticamente pelo fetch
const getToDos = async () => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/guide/');
        const dados = await resposta.json();

        if (dados.error) {
            throw new Error(Data.error); //verifica se há erro retornado pelo próprio servidor na resposta JSON
        } if (!resposta.ok) { //verifica se a respota é ok — ideal para quando o catch não é acionado mas a resposta não é 200 no servidor
            throw new Error('Ops! Algo deu errado!'); //lança um erro manualmente para ser tratado no bloco catch 
        }
        console.log("Dados do GET ". dados);
    } catch (err) { 
        console.log(err); //captura erros de rede ou sintaxe
    }
}

//MÉTODO POST

//MÉTODO PUT

//MÉTODO DELETE

//02:15