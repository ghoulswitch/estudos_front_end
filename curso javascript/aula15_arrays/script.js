let num = [5, 2, 8, 9, 3]
num[5] = 7 
num.push(1) 

// console.log(`Nosso vetor é o ${num}`) 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//for (let pos = 0; pos < num.length; pos++) { 
for (let pos in num) {
    //console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}