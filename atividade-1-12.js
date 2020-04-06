var user = require("readline-sync")

var nome = user.question("Escreva seu nome: ")
var sexo = user.question('Digite 1 para "FEMININO" e 2 para "MASCULINO": ')
var ecivil = user.questionInt('Digite 1 para CASADO(A)  ou 2 para SOLTEIRO(A): ')

if (sexo==1 || ecivil===1) {
    var tempo = user.questionInt("E CASADO(A) á cuantos anos?: ")
    console.log("Dados inseridos com sucesso. ")
}