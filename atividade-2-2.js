var user = require("readline-sync")

var escalatermo = user.questionInt("Digite 1 (celsius para fahrenheit) ou 2 (fahrenheit para celsius): ")
var graus = user.questionInt("Digite a quantidade de graus para conversao: ")

var celsiusxfah = (graus*1.8) + 32 //ºF=ºC*1,8+32   //ºC=(ºF-32)/1,8
var fahxcelsius = (graus-32) / 1.8

if (escalatermo==1) {
    console.log(celsiusxfah + " graus FAHRENHEIT.")
} else if (escalatermo==2) {
    console.log(fahxcelsius + " graus CELSIUS.")
} else {
    console.log("Operação não permitida.")
}