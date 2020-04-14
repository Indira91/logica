var user = require('readline-sync')
idades= 0
cont=1;

while(cont<=8){
     var idade= user.questionInt("Digite a " + cont + " idade: ")
     cont++
    if(idade>idades){
        idades = idade;
    }
    
}
        console.log("A maior idade da lista e: " + idades);
   
