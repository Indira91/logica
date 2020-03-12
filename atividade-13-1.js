var user = require('fs')

var json = user.readFileSync("./cars.json")
var cars = JSON.parse(json)
// console.log(cars[0].Car)

var user = require("readline-sync")

var potencia = user.questionFloat("Insira a potencia: ")


var filtrado = cars.filter (potentes => {
    if ((potentes.potencia)>(cars.Horsepower))
return true
})



