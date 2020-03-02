var user = require('readline-sync')

var numero = user.question('Escreva o numero: ')


if (100<numero) {
    console.log("Você digitou um numero entre 100 e 200")
} 
  else {
      console.log("Você digitou um numero fora da faixa entre 100 e 200")
}

