//DEFININDO TIPOS DE VARIÁVEIS
// quando não for indicado o tipo da variável o ts vai definir automaticamente se baseando no valor

let idade = 5;
let age: number = 5; 
const personName: string = "milly";
const isValid: boolean = true;
let teste: any = "testando"; //any pode ser qualquer tipo de dado

const lista: number[] = [1, 2, 3, 4, 5] //array de números; é preciso ter as chaves na frente de number para indicar que é um array de números
const lista2: boolean[] = [true, false, true]
const nomes: string[] = ["jennie", "felipe", "milly"]

//TUPLA
const tuplaExemplo: [number, string] = [1, "milly"]

//LISTA DE TUPLAS
const listaTuplas: [number, string][] = [
    [1, "milly"],
    [2, "jennie"], 
    [3, "felipe"]
]

//INTERSECTIONS
const produto: string | number | boolean = "milly" //pode ser strin, number ou booleano

//ENUM 
enum Cor {
    Vermelho = 1, 
    Azul = 2
}
//assinalando a cor 
const corfavorita: Cor = Cor.Azul 

//TYPE ASSERTIONS 
const minhaIdade: any = 23;
const idadeString = <number>minhaIdade;
//ou
const idadeString2 = minhaIdade as number;

console.log(corfavorita);
