var user = require("readline-sync")

var numero = user.questionInt("Digite o numero para consulta: ")

var cont = 0 ;

while(cont<=numero){
    if(numero%cont==0){
     console.log(cont) 
    }
    cont++
 }
 