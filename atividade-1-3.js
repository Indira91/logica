var user = require('readline-sync')

var password = user.question(" Digite a Senha: ")

if (password==1234) {
    console.log('ACESSO PERMITIDO')
} else {
    console.log("ACESSO NEGADO")
}