var user = require("readline-sync")
var total = 0
cont = 1;

while(cont<=15){
var numero = user.questionInt("Digite o numero: ")
var total = total + numero 
    cont++   
}
  console.log("A media final e: " + total/15)