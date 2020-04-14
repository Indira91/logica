var user = require("readline-sync")

var senha = user.question("Escreva a senha: ")


if (senha == "batatafrita") {
    console.log("Acesso permitido.")
} else{
    console.log("Você não tem acesso ao sistema.")
}