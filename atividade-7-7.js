vogais = 'aeiou'

var numcons = 0
var numvogal = 0
var user = require('readline-sync')
var palavra = user.question("Insira uma palavra").toLowerCase()

for (var i=0;i<palavra.length;i++){
    isVogal = false
    for(var j=0;j<vogais.length;j++){
        if(palavra[i] == vogais[j]){
            isVogal = true
            break
        }
    }
    

}