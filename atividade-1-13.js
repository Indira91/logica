var user = require("readline-sync")

var num1 = user.questionFloat("Digite o numero: ")

if (num1>0){
    console.log(num1*2)
}else if(num1<0){
    console.log(num1*3)
}else{
    console.log("Numero não permitido.")
}
