var user = require("readline-sync")

var cant = user.question('Digite a Quantidade: ')

var valor1 = cant*(0.25)
var valor2 = cant*(0.3)

if (cant>=12) {
    console.log("Valor Total: " + valor1 + " a ser pago.")
} else {
    console.log("Valor Total: " + valor2 + ' a ser pago.')
}



