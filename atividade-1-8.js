var user = require("readline-sync")

var med1 = user.questionFloat("Digite a medida do lado 1: ")
var med2 = user.questionFloat("Digite a medida do lado 2: ")
var med3 = user.questionFloat("Digite a medida do lado 3: ")

if (med1 == med2 && med1 == med3 && med2 == med3  ){
    console.log("E um triângulo EQUILÁTERO.")

}else if (med1==med2||med1==med3||med2==med3){
    console.log("E um triângulo ISÓSCELES.")

}else {
    console.log("E UM triâgulo ESCALENO.")
}