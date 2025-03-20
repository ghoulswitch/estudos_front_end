//DEFININDO TIPOS DE VARIÁVEIS
// quando não for indicado o tipo da variável o ts vai definir automaticamente se baseando no valor
var idade = 5;
var age = 5;
var personName = "milly";
var isValid = true;
var teste = "testando"; //any pode ser qualquer tipo de dado
var lista = [1, 2, 3, 4, 5]; //array de números; é preciso ter as chaves na frente de number para indicar que é um array de números
var lista2 = [true, false, true];
var nomes = ["jennie", "felipe", "milly"];
//TUPLA
var tuplaExemplo = [1, "milly"];
//LISTA DE TUPLAS
var listaTuplas = [
    [1, "milly"],
    [2, "jennie"],
    [3, "felipe"]
];
//INTERSECTIONS
var produto = "milly"; //pode ser strin, number ou booleano
//ENUM 
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
//assinalando a cor 
var corfavorita = Cor.Azul;
console.log(corfavorita);
