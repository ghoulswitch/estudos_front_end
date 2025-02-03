var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseleave', sair)

function clicar() {
    var a = window.document.getElementById('area')
    a.innerText = 'Clicou!'
    a.style.background = 'brown'
}

function entrar() {
    var a = window.document.getElementById('area')
    a.innerText = 'Entrou!'
}

function sair() {
    var a = window.document.getElementById('area')
    a.innerText = 'Saiu!'
    a.style.background = 'rgb(196, 127, 71)'
}