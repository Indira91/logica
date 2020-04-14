var user = require("readline-sync")

var palavra = user.question("Digite aqui a palavra: ")
var tamanho = palavra.length;

cont = 0;

while(cont<tamanho) { 
    console.log(palavra.charAt(cont));
   cont++
}