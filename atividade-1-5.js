var user = require("readline-sync")

var num1 = user.questionInt('Insira o primer Numero inteiro: ')
var num2 = user.questionInt('Insira o seguinte numero inteiro: ')
var num3 = user.questionInt("Insira o ultimo numero inteiro: ")

if (num1==num2) {
    console.log('Numeros Repetidos, insira novamente: ')
} else if (num2==num3) { 
    console.log('Numeros repetidos, insira novamente: ')
} else if (num1==num3) {
    console.log('Numeros repetidos, insira novamente: ')
}else {

    var todos = [num1, num2, num3]

    function sortfunction(a,b){
        return (a-b);
    }
    
    console.log(todos.sort(sortfunction));
}





