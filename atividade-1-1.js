var user = require('readline-sync')
var ano = user.question("ano de nascimento")

var idade = 2020-ano

if (idade<16) {console.log("não pode votar")
}
else if (idade>18) {console.log("deve votar")
}
else {console.log("pode votar mais não e obrigado")
}
