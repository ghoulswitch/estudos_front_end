
const x = "variavel global";

//ESCOPO
//ESCOPO Global
//ESCOPO de Função
const funcao = () => { //função do tipo arrow function; é a melhor forma de declarar funções pois há menos possibilidades de erros
    const a = "variavel do escopo de função";

    console.log(a);
    
}

funcao(); //chamando a função; só funciona se for chamada fora da função

//ESCOPO de Bloco
if (x) {
    console.log(x);
}


//HOISTING é o comportamento de mover declarações para o topo de um escopo para que possa ser usadas apropriadamente.