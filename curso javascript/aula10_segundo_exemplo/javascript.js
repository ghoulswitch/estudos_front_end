function somar(){
var tn1 = window.document.getElementById('txtn1')
var tn2 = window.document.getElementById('txtn2') /* ou até: querySelector('input#txtn2')*/
var rest = window.document.getElementById('rest')
//quando o número vem de uma caixa de texto ele vem como string(?), eentão precisa converter
var n1 = Number(tn1.value) //ou parseInt
var n2 = Number(tn2.value)
var s = n1 + n2

rest.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>` //sempre usar aspas invertidas!!!
}