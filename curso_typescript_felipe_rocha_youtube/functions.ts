//DECLARANDO FUNÇÕES
const soma = (a: number, b: number) => {
    return a + b;
};

const valor = soma(2, 3);

//outra forma de declarar a mesma função
const soma =  (a: number, b: number): string => {
    return (a+b).toString(); 
};

//função que não retorna nada
const log = (message: string) => {
    console.log(message); 
};

//INTERFACES COM FUNÇÕES
