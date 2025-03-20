//Map, Filter e Reduce

const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

//MAP - também varre todo o array, mas retorna um novo array com os resultados do original reatribuidos 
distanciaEmMetros.map((conversao) => {
    const distnaciaEmKm = conversao / 1000;

    console.log("Distância em Km", distnaciaEmKm);
    return distnaciaEmKm; 
});

//simplificando...
distanciaEmMetros.map( conversao => conversao / 1000); 

//retornando o novo array
const distanciasEmKm = distanciaEmMetros.map( conversao => conversao / 1000); 

console.log("Distâncias em Km:", distanciasEmKm);


//FILTER - filtra os elementos de um array com base em uma condição
const intensFiltrados = distanciaEmMetros.filter( distancia => {
    if (distancia > 2000) return distancia;
});

//simplificado...
const itensFiltrados = distanciaEmMetros.filter( distancia => distancia > 2000);


console.log(itensFiltrados)

//REDUCE - é um método que reduz o array a um único valor
const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => { //acc é o acumulador que vai somar junto com o valor atual, que é a distância
    return acc + distancia;
}, 20) //0 é o valor que será incluido junto dos valores do array

console.log(distanciaTotal);