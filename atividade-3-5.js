var user = require("readline-sync")

var base = user.questionInt("Insira o numero base: ")
var potencia = user.questionInt("Insira a potencia: ")

var produto = base
    
    while (potencia > 1) {
        produto = produto*base
        potencia--  
    }
    console.log(produto)
