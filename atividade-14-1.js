var axios = require('axios')
var  user = require('readline-sync')
var entrada = user.question(" Digite  yes ou nao: ")


function PegaDados(){
    axios.get('https://yesno.wtf/api')
        .then(dados =>{
            var simOuNao = dados.data.answer
            //console.log(dados.data);
            
            if(simOuNao === 'yes'){
                simOuNao = true
            }else{
                simOuNao = false
            }
            if(simOuNao === entrada){
                console.log("Yep "+dados.data.image)
            }else{
                console.log("Nop "+dados.data.image)
            }
            
        })
    }
    PegaDados()