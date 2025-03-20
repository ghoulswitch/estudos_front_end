//DESESTRUTURAÇÃO DE ARRAYS E OBJETOS - é uma forma de extrair dados, e atribui-lás a novas variáveis, de forma simples e rápida

//DESESTRUTURAÇÃO DE ARRAYS
const nomes = ["Maria", "Beatriz", "Matheus"];

const [nome1, nome2, nome3] = nomes;

//desestruturação de arrays dentro de arrays
const casais = [["Maria", "Décio"], ["Matheus", "Beatriz"]];

const [casal1, casal2] = casais;

//ou
const [[nome11, nome22], [nome33, nome4]] = casais;

//DESESTRUTURAÇÃO DE OBJETOS
const pessoa = {
    nome: "Maria",
    sobrenome: "Elena",
    familia: ["Décio", "Matheus", "Beatriz"]
}

const {nome: primeiroNome, sobrenome: segundoNome, familia: membrosFamilia} = pessoa; //aqui é possível renomear as variáveis

//segundo exemplo
const pessoa2 = {
    nomeCompleto: {
        nome: "Maria",
        sobrenome: "Elena"
    },
    familia: ["Décio", "Matheus", "Beatriz"]
}

const {nomeCompleto: {nome, sobrenome}, familia} = pessoa2;
