var user = require("readline-sync")

var nota1 = user.questionFloat("Digitar a primeira nota: ")
var nota2 = user.questionFloat("Digitar a seguinte nota: ")
var nota3 = user.questionFloat("Digitar a ultima nota: ")

if (nota1>10||nota2>10||nota3>10){
    console.log("Inserir notas válidas")
}

var notas = (nota1 + nota2 + nota3)/3

if (notas>=7 && notas<=10){
    console.log("ALUNO APROVADO")
} else if (notas<7){
    console.log("ALUNO REPROVADO")
}
