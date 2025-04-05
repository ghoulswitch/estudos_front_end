/*Ensine snoopy e scoobydoo a latirem*/

//função construtora
function Doguinho(raca) {
    this.raca = raca;
}  

var snoopy = new Doguinho("Beagle");
snoopy.latir = function() {
    return "Woof";
};

var scoobydoo = new Doguinho("GreatDane");
snoopy.latir = function() {
    return "Woof";
};