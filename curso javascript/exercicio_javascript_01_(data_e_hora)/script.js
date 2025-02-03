function carregar() {
    var msg = window.document.getElementById('msg')
    var Image = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas. `

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += 'Bom dia!'
        Image.src = './media/manha.jpg'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += 'Boa tarde!'
        Image.src = './media/tarde.jpg'
        document.body.style.background = '#b9846f'

    } else {
        msg.innerHTML += 'Boa Noite!'
        Image.src = './media/noite.jpg'
        document.body.style.background = '#515154'
    }
}