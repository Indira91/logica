var user = require('readline-sync')

var numero = user.questionInt('Escreva o numero: ')


if (numero>=100 && numero<=200) {
    console.log("Você digitou um numero entre 100 e 200")
} 
  else {
      console.log("Você digitou um numero fora da faixa entre 100 e 200")
}

