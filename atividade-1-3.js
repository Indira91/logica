var user = require('readline-sync')

var password = user.questionInt(" Digite a Senha de 4 digitos: ")

if (password==1234) {
    console.log('ACESSO PERMITIDO')
} else {
    console.log("ACESSO NEGADO")
}