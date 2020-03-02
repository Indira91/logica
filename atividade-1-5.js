var user = require("readline-sync")

var num1 = user.question('Insira o primer Numero: ')
var num2 = user.questionFloat('Insira o seguinte numero: ')
var num3 = user.questionFloat("Insira o ultimo numero: ")

if (num1==num2) {
    console.log('Numeros Repetidos, insira novamente: ')
} else if (num2==num3) { 
    console.log('Numeros repetidos, insira novamente: ')
} else if (num1==num3) {
    console.log('Numeros repetidos, insira novamente: ')
}else {
    console.log('numero certo')
}





