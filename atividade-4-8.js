console.log('Bem vindo ao jogo de pedra (A) papel (B) tesoura (C).')



var user = require('readline-sync')

while(jogadaA != 'A' && jogadaA != 'B' && jogadaA != 'C' ){
    var jogadaA = user.question('JOGADOR A, INSIRA SUA JOGADA (A, B ou C): ', {hideEchoBack:true}).toUpperCase
}
while(jogadaB != 'A' && jogadaB != 'B' && jogadaB != 'C' ){
    var jogadaB = user.question('JOGADOR B, INSIRA SUA JOGADA (A, B ou C): ', {hideEchoBack:true}).toUpperCase
}
if(jogadaB==jogadaA){
    console.log('Deu empate')
}
else if(jogadaA == 'B'){
    if(jogadaB == )
}


