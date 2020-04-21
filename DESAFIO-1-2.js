var user = require('readline-sync')

var frase = user.question('Escreva sua frase favorita: ')
var cadena= frase.split(0)

console.log(cadena)