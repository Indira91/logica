var user = require("readline-sync")

var polig = user.questionInt("Digite o numero de lados: ")
var lado = user.questionFloat("Digite o tamanho do lado: ")

if (polig == 3) {
    console.log("TRIÁNGULO com área de: " + ((lado*Math.sqrt(3))/4 + " m"))
}else if (polig == 4) {
    console.log("QUADRADO com área de: " + (Math.pow(lado, 2)) + " m" )
}else if (polig == 5) {
    console.log("PENTÁGONO" )
}

else {
    console.log("Poligono não encontrado na base de dados.")
}

