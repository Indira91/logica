var user = require("readline-sync")

var salario = user.questionFloat("Informe o valor de seu salario atual: ")
var emprestimo = user.questionFloat("Informe o valor total do emprestimo: ")
var parc = user.questionInt("Informe o numero de parcelas: ")

var prestação = (emprestimo/parc)
var porcsal = (salario/100)*30

if (salario <= 0 || emprestimo <=0 || parc<= 0){
    console.log("Informe valores maior que zero.")
}else if (prestação<porcsal){
    console.log("Emprestimo concedido.")
} else {
    console.log("Emprestimo não aprovado.")
}
