var user = require("readline-sync")

var produto = user.questionFloat("Digite o valor total do produto: ")

var real1 = 18*1
var cents50 = 25*0.5
var cents25 = 13*0.25
var cents10 = 25*0.10
var cents5 = 45*0.05
var cents1 = 100*0.01

var cofrinho = (real1+cents50+cents25+cents10+cents5+cents1)
console.log("o valor total do cofre " + cofrinho);

if (produto<cofrinho){
    console.log('Você possui o valor sufuciente para comprar.')
}else {
    console.log("O dinheiro não e suficiente para comprar.")
}