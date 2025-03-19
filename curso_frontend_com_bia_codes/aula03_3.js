//ForEach é um tipo de loop que percorre cada elemento de um array e executa uma função para cada elemento.

const notasFinais = [
    {nome: "Beatriz", nota: 5},
    {nome: "Matheus", nota: 7},
    {nome: "Amanda", nota: 10},
    {nome: "Paula", nota: 5},
]

notasFinais.forEach((aluno) => {
    if (aluno.nota >= 6) {
        console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
    } else {
        console.log(`O aluno ${aluno.nome} está reprovado`)
    }
})

//FOR OF é um loop que percorre cada elemento de um array; "aluno" representa cada elemento do array

/*for (let aluno of notasFinais) { 
    if (aluno.nota >= 6) {
    console.log(`O aluno ${aluno.nome} está aprovado com ${aluno.nota}`)
} else {
    console.log(`O aluno ${aluno.nome} está reprovado`)
}
}*/