var user = require("readline-sync")
var numero = user.question("Digite o numero desejado: ")
var cont = 0 ;

while(cont<=numero){
    if(cont%2==0){
     console.log(cont) 
    }
    cont++
 }
 