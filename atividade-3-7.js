var user = require('readline-sync')

var ent = user.question("Digite A para sair ou B para fazer uma soma: ")


while(ent != "b" && ent != "B" && ent != "a" && ent != "A"){
    console.log("upssss Voce digitou uma letra invalida!");
    ent = user.question("Digite A ou B! ");   
 }
     while(ent == "b" || ent == "B"){
        
         console.log("Realize a operacao de soma!");
         num1 = user.questionInt("Digite o primer numero:  ");
         num2 = user.questionInt("Digite o segundo numero:  ");
         console.log("O resultado e: " + (num1+num2));
     
         ent = user.question("Se deseja fazer outra soma digite B, ou digite A para encerrar. ");
         while(ent != "b" && ent != "B" && ent != "a" && ent != "A"){
             console.log("Voce digitou uma letra invalida!");
             ent = user.question("Digite A ou B: "); 
         }
 }
 
           console.log("Programa encerrado! ");