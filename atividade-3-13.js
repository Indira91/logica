var user = require('readline-sync')
var impar=0
var total = 0
cont=1
contpar = 0;
contimpar = 1;

while(cont<=5){
    
    var num = user.questionInt("Digite o numero: ")

    if(num%2==0){ 
        contpar = contpar+num  
    }else{
        contimpar = contimpar*num
    }
        cont++


}
        console.log("Produto dos impares: " + contimpar)
        console.log("Soma dos pares: " + contpar)