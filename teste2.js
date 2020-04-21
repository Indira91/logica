var user = require("readline-sync")

var angulo1 = user.questionFloat("Digite o valor do angulo 1 do triangulo: ")
var angulo2 = user.questionFloat("Digite o valor do angulo 2 do triangulo: ")
var angulo3 = user.questionFloat("Digite o valor do angulo 3 do triangulo: ")


if ((angulo1 == 90 || angulo2 == 90 || angulo3 == 90) && ((angulo1+angulo2+angulo3)==180)) {
    console.log("O triangulo e RETÂNGULO")
}else if ((angulo1>90 || angulo2>90 || angulo3>90) && ((angulo1+angulo2+angulo3)==180) ) {
    console.log("O triangulo e OBTUSÂNGULO")
}else if ((angulo1<90 || angulo2<90 || angulo3<90) && ((angulo1+angulo2+angulo3)==180) ) {
    console.log("O triângulo e ACUTÂNGULO")
} else {
    console.log("Valor digitado invalido.")
}


//DESCRICAO DO PROBLEMA
//Escreva um programa que leia o valor de 3 nagulos de um triangulo
//e escreva se o triangulo e Acutangulo, Retangulo ou Obtusangulo.

//Sendo que:
//-TRIANGULO RETANGULO: Possui um angulo reto
//-TRIANGULO OBTUSANGULO: Possui um angulo obtuso.
//-TRIANGULO ACUTANGULO: Possui 3 angulos agudos.