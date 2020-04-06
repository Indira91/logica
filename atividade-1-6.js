var user = require("readline-sync")

var sexo = user.questionInt("Digite 1 para feminino ou 2 para masculino: ")
var altura = user.questionFloat("Digite sua altura exata: ")

if (sexo == 1){
    console.log("Peso ideal:" + ((62.1*altura) - 44.7))
}else if (sexo == 2){
    console.log("peso ideal: " + ((72.7*altura) - 58))

}else {
    console.log("Escolha 1 ou 2 na primeira solicitação. Tente novamente.")
}
