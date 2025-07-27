// const harryPotterHouses = async() => { //com async, a função inteira se torna uma Promise, e não apenas o fetch
//     const resposta = await fetch('https://potterapi-fedeperin.vercel.app/pt/houses'); //com o await esperamos a resposta da requisição antes de continuar
//     const dados = await resposta.json(); //pela conversão para JSON também ser assíncrona, é usado await novamente

//     console.log("Dados: ", dados);
// }

// harryPotterHouses();

//TRATANDO ERROS com async await (método usado para tratar qualquer erro em qualquer trecho de código)
const harryPotterHouses = async() => { 
    try {
        const resposta = await fetch('https://potterapi-fedeperin.vercel.app/pt/houses'); 
        const dados = await resposta.json(); 

        console.log("Dados: ", dados);
    } catch (error) {
        console.log(error);
    }
}

harryPotterHouses();