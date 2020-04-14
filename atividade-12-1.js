class Carro {
    constructor(nome, modelo, cor) {
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}

var user = require("readline-sync")

var nome1 = user.question("Informe o nome: ")
var modelo1 = user.question("Informe o modelo: ")
var cor1 = user.question("Informe a cor do carro:")

var carro1 = new Carro(nome1, modelo1, cor1)
console.log(carro1)

var nome2 = user.question("Informe o nome: ")
var modelo2 = user.question("Informe o modelo: ")
var cor2 = user.question("Informe a cor do carro:")

var carro2 = new Carro(nome2, modelo2, cor2)
console.log(carro2)

if(carro1.nome == carro2.nome && carro1.modelo == carro2.modelo) {
console.log ("CARROS IGUAIS")
} else {
    console.log("CARROS DIFERENTES")
}