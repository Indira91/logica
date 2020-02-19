var user = require("readline-sync")

base = (user.questionInt("Insira a Base"))
exp = (user.questionInt("Insira o Exp"))

var produto = base
    
    while (exp > 1) {
        produto = produto*base
        exp--
        
    }
