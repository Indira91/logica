var user = require("readline-sync")

var teclas = user.question("Digite 0 para sair ou qualquer outra tecla para continuar: ")

while (teclas != 0) {
    teclas = user.question("Insira 0 para sair ou qualquer outra tecla para o continuar:  ");
}
    console.log("Programa encerrado! ");
