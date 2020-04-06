var user = require("readline-sync")

var num1 = user.questionInt("Digite o primer numero inteiro: ")
var num2 = user.questionInt("Digite o segundo numero inteiro: ")

if (num1%num2 === 0){
    console.log("São divisiveis.")
}else{
    console.log("Não são divisiveis.")
}