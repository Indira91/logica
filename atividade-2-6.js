var user = require("readline-sync")

var etiqueta = user.questionFloat("Digite o precio da etiqueta: ")
var formapag = user.questionInt("Escolha: 1, 2, 3 ou 4 para forma de pagamento. ")

var dinheirocheque = etiqueta - (etiqueta/100)*10
var cartao1x = etiqueta - (etiqueta/100)*15
var cartao2x = etiqueta + (etiqueta/100)*10

if (formapag==1) {
    console.log("O valor a ser pago é: " + dinheirocheque)
} else if (formapag==2) {
    console.log("O valor a ser pago é: " + cartao1x)
}else if (formapag==3) {
    console.log("O valor a ser pago é: " + etiqueta)
}else if (formapag==4) {
    console.log("O valor a ser pago é: " + cartao2x)
}else {
    console.log("Não temos essa opção.")
}