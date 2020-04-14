var user = require("readline-sync")

var salarmin = user.questionInt("Digite aqui seu salario minimo: ")
var kw = user.questionInt("Quantidade de KW gastos na residencia: ")

var kw1 = (salarmin/7)/100
    console.log("O valor de cada KW e de: " + kw1)

var totalreais = kw*kw1
    console.log("Valor total a ser pago: " + totalreais)

var descon = (totalreais/100)*10 
    console.log("O valor com desconto é: " + (totalreais - descon))


