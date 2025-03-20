//DECLARANDO FUNÇÕES
const soma = (a: number, b: number) => {
    return a + b;
};

const valor = soma(2, 3);
console.log(valor); 

//outra forma de declarar a mesma função
/*const soma =  (a: number, b: number): string => {
    return (a+b).toString();
};

const valor = soma(2, 3);*/

const log = (message: string) => {
    console.log(message); //retorna void pq não possui nenhuma info para retornar
};