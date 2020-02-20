var user = require('readline-sync')

var numero = user.question("escreva o numero: ")

if ((numero%2)==0) {
    console.log ('Numero PAR')
} else {
    console.log ('Numero IMPAR')
}