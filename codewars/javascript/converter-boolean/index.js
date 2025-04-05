//Complete o método que converte um booleano e retorna uma string "yes" se for verdadeiro e "no" se for falso.

function boolToWord(boolean){
    return boolean ? "Yes" : "No";
}

console.log(boolToWord(true));  
console.log(boolToWord(false));