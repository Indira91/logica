var axios = require('axios')
var user = require("readline-sync")
var episodio = user.questionInt("Digite o episodio procurado: ")


axios.get(`https://www.breakingbadapi.com/api/episodes/${episodio}`)
    .then(function (resposta) {
        
        console.log(`PERSONAGENS: ${resposta.data[0].characters}`); 
        console.log(`TEMPORADA: ${resposta.data[0].season}`);

    })
    .catch(function (errado) {
        console.log("O episodio não existe")
    })