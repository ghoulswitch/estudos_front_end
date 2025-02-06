let num = [5, 2, 8, 9, 3]
num[5] = 7 // adiciona o valor 7 na posição 6
num.push(1) // addiciona este valor na última posição do array
/*num.length // retorna o tamanho do array*/
/*num.sort() // coloca os valores em ordem crescente*/

// console.log(`Nosso vetor é o ${num}`) 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos = 0; pos < num.length; pos++) { // pos = 0 é a posição inicial do array e pos < num.length significa que enquanto a posição for menor que o tamanho final do array, ele vai continuar a execução pois o pos++ vai incrementar a posição
    //console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}