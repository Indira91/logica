var user = require("readline-sync")

var numer = user.questionInt("Digite um numero inteiro: ")

cont = 1;

while (cont<=10){

    console.log(cont + " X " + numer + " = " + (numer*cont))
    cont++
}
    