var axios = require("axios")
var user = require("readline-sync")


axios.get(' https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(function (resposta) {

        console.log(`FRASE: ${resposta.data[0].quote}`);
        console.log(`AUTOR: ${resposta.data[0].author}`);
    })