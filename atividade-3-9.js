var user = require("readline-sync")

var palavra = user.question("Digite aqui a palavra: ")
var tamanho = palavra.length;


while(tamanho>=-1) { 
    console.log(palavra.charAt(tamanho));
    tamanho--
}