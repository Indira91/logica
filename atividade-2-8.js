var user = require("readline-sync");

var texto = user.question("Escreva seu texto aqui: ")
var letra = texto.charCodeAt(0);

console.log(letra)

if (letra>=65 && letra<=90){
    console.log("A primeira letra e maiuscula!")
} else if (91<=letra<=122) {
    console.log ("Sua letra e minuscula.")
}