//OPERADORES SPREAD 

//EM ARRAYS
const listaAniversario = ["Maria", "Beatriz", "Matheus"];

//forma antiga
const listaAniversario02 = [listaAniversario[0], listaAniversario[1], listaAniversario[2], "Sérgio", "Valdete"]; 

//com spread
const listaAniversario02 = [...listaAniversario, "Sérgio", "Valdete"];

//criando uma cópia
const listaAniversario03 = [...listaAniversario];
listaAniversario03.push("leonardo");

//EM OBJETOS
const professor = {
    materia: "Matemática",
    escola: "Escola Estadual",
    nome: "Beatriz"
}

const professor02 = {
    ...professor,
    nome: "Décio"
}

console.log([professor]);
console.log([professor02]);