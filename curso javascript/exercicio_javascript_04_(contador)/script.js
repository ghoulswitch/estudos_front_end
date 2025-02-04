function contar () {
    let inicio = document.getElementById('txtinicio') /* usando let no lugar de var faz com que este valor seja exclusivo desta função/bloco; prática recomendada para evitar conflitos de variáveis e bugs. */
    let fim = document.getElementById('txtfim')
    let intervalo = document.getElementById('txtintervalo')
    let resultado = document.getElementById('resultado')


    if (inicio.value.lenght == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'

    } else {
        resultado.innerHTML = 'Contando: <br> '
        //Convertendo os valores para números
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let inter = Number(intervalo.value)

        if (inter <= 0) {
            alert('Intervalo inválido! Considere preencher com 1')
        }

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += inter) /* c += inter é a mesma coisa que  c = c + inter; aula 14 */ {
                resultado.innerHTML += /* += é concatenação */ ` ${c}, ` /* U+1F600 -> \u{1F600} (formatação unicode para o javascript)  */
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            //contagem descrescente
            for (let c = i; c >= f; c -= inter) {
                resultado.innerHTML += ` ${c}, `
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
    }

}