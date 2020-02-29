
//media ponderada a*0.3+b*0.7
user = require("readline-sync")

//arrays de armazenamento
nomeAluno = user.question("Insira o nome do aluno: ")
var notaA = user.questionFloat('Insira a nota da prova A: ')
var notaB = user.questionFloat('Insira a nota da prova B: ')
var mediaPonderada = 0.3*notaA + 0.7*notaB
console.log(`O aluno ${nomeAluno} tem uma media: ${mediaPonderada}`)