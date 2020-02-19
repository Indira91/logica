var user = require("readline-sync")

var num = 1 //contador//

while (num<=50) {
    
    if ((num%2)==0) {
        console.log("Numero: " + num + " Par")
    } else {
        console.log("Numero: " + num + " Impar")
    }
      num++ // num=num+1//
      
}



