var idade = 70

console.log(`Você tem ${idade} anos.`)

if (idade < 16) { //abaixo de 16
    console.log(`Não vota!`)
} else if (idade >= 16 && idade < 18 || idade > 65) { //maior ou igual que 16 E menor que 18 OU maior que 65
    console.log(`Voto opcional!`)
} else { //maior que 18
    console.log(`Voto obrigatório!`)
} 