var user = require('readline-sync')

var num1 = user.questionInt("Insira o Primer numero: ")
var num2 = user.questionInt("Insira o Segundo Numero: ")

var num3 = 0;  //contador


while(num2>0){
   
    num3 = num3+num1;
    num2--; 
 }
     console.log("O numero e " + num3);
     