//DECLARANDO FUNÇÕES
// const soma = (a: number, b: number) => {
//     return a + b;
// };

// const valor = soma(2, 3);

//outra forma de declarar a mesma função
const soma =  (a: number, b: number): string => {
    return (a+b).toString(); 
};

//função que não retorna nada
const log = (message: string) => {
    console.log(message); 
};

//INTERFACES COM FUNÇÕES
interface MathFunc {
    (x: number, y:number): number;//define vai ter que retornar number
}

//implementando a interface em uma função
const somar: MathFunc = (x: number, y:number): number => {
    return x + y;
};

const subtrair: MathFunc = (x: number, y: number) => {
    return x - y;
}