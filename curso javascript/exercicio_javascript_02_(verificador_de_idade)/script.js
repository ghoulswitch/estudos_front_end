function verificar(){
    var data = new Date() /* pega a data e hora do sistema */
    var ano = data.getFullYear() /* Ano atual com quatro digitos */

    var formAno = document.getElementById('txtano')
    var resultado = document.querySelector /* faz o mesmo que getElementById */('div#resultado') 

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)

        var genero = ''
        var img = document.createElement('img') /* cria uma tag img */ 
        img.setAttribute('id', 'foto') /* add id para foto */

        if (formSex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', './media/crianca_homem.jpg') 

            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', './media/adolescente_homem.jpg')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './media/adulto.jpg')

            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', './media/idoso.jpg')

            }

        } else if (formSex[1].checked) { /* se usar apenas else, significa que o bloco anterior é falso; já tirando os parênteses não terá condição para saber se o botão foi selecionado */
            genero = 'Mulher'

            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', './media/crianca_mulher.jpg')

            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', './media/crianca_mulher.jpg')

            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', './media/adulta.jpg')

            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', './media/idoso.jpg')

            }
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.style.textAlign = 'center' 

        resultado.appendChild(img) /* appendChild adiciona o elemento img ao resultado */

    }
}