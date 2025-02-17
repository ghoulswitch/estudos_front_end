let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value)) { //se o valor for um número E não estiver na lista

    } else {
        alert('Valor inválido!')
    }

}