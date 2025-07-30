const getPosts = async () => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dados = await resposta.json();

        if (dados.error) {
            throw new Error(Data.error); //verifica se há erro retornado pelo próprio servidor na resposta JSON
        } if (!resposta.ok) { //verifica se a respota é ok — ideal para quando o catch não é acionado e o status não é 200 no servidor
            throw new Error('Ops! Algo deu errado!'); //lança um erro manualmente para ser tratado no bloco catch 
        }
        console.log("Dados do GET ". dados);
    } catch (err) { 
        console.log(err); //captura erros de rede ou sintaxe
    }


}

//MÉTODO GET (método já implementado automaticamente pelo fetch — adquirindo dados)
//getPosts();

//MÉTODO POST (para enviar dados para o backend — envio)

const publishNewPost = async() => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', //sempre especificar o método se ele não for GET
            body: JSON.stringify({ //o JSON.stringify() converte um objeto Javascript(corpo da requisição) em uma string JSON
                tittle:'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: { //especifica o tipo de conteúdo que está sendo enviado — a doc da API exige que seja especificado
                'Content-type': 'application/json',
            },
        });

        const dados = await resposta.json();
        if (dados.error) {
            throw new Error(data.error);
        } if (!resposta.ok) {
            throw new Error('Ops! Algo deu errado nos POST!');
        } console.log("Resposta do POST: ", dados);
    } catch (err) {
        console.log(err);
    }
}

//publishNewPost();

//MÉTODO PUT (para alterar algum registro do banco de dados — edição)

const editPost = async() => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', { //o ID da postagem a ser editada deve ser especificada na URL 
            method:'PUT',
            body: JSON.stringify({
                tittle: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        });

        const dados = await resposta.json();
        if (dados.error) {
            throw new Error(data.error);
        } if (!resposta.ok) {
            throw new Error('Ops! Algo deu errado no PUT!');
        } console.log("Resposta do PUT: ", dados);
    } catch (err) {
        console.log(err);
    }
}

//editPost();

//MÉTODO PATCH (edita apenas uma propriedade de um registro — diferente do PUT que altera o registro por completo)

const editPostTitle = async () => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method:'PATCH',
            body: JSON.stringify({
                tittle: 'foo',
            }),
            headers: {
                'Content-type': 'application/json',
            },
        });

        const dados = await resposta.json();
        if (dados.error) {
            throw new Error(data.error);
        } if (!resposta.ok) {
            throw new Error('Ops! Algo deu errado no PATCH!');
        } console.log("Resposta do PATCH: ", dados);
    } catch (err) {
        console.log(err);
    }
}

//editPostTitle();

//MÉTODO DELETE (para deletar um registro)

const deletePost = async () => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method:'DELETE',
        });

        const dados = await resposta.json();
        if (dados.error) {
            throw new Error(data.error);
        } if (!resposta.ok) {
            throw new Error('Ops! Algo deu errado no DELETE!');
        } console.log("Resposta do DELETE: ", dados);
    } catch (err) {
        console.log(err);
    }
}

//STATUS DE ERRO

//Começam com 2: Sucesso — 
//                      2001: Sucesso na criação de um registro.

//Começa com 4: Erro no lado do cliente, desenvolvedor. —
//                      400: Erro genérico — o servidor não especifica qual o erro.
//                      401: Falha na autenticação ou falta de credenciais — token expirado, login etc.
//                      403: Rota encontrada mas não possui permissão de acesso — é necessário passar alguma configuração adicional.
//                      404: Erro na rota; rota não encontrada.

//Começa com 5: Erro do lado do servidor — backend.
//                      500: Erro genérico
//                      503: Serviço indisponível.