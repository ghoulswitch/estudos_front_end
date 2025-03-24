//VALORES TRUTHY E FALSY (0, "", undefined, null, NaN) - é o resultado de quando se converte um valor para booleano

const nomes = ["Maria", "João", '', "Matheus"];
console.log("Nomes: ", nomes);

//filtrando apenas os valores truthy 
const nomesFiltrados = nomes.filter((nome) => nome);
console.log("Nomes Truthy: ", nomesFiltrados);