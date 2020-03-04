const fs = require('fs');
var meuCarro = new Object()
meuCarro['cor'] = "amarelo"
meuCarro["marca"] = "Ford"
meuCarro['modelo'] = "Celta"

console.log(`O carro possui a cor: ${meuCarro["cor"]}`)
console.log(`A marca do carro e: ${meuCarro["marca"]}`)
console.log(`O modelo do carro e: ${meuCarro["modelo"]}`)

var objetoSerializado = JSON.stringify(meuCarro)
var CaminhoDoArquivo = 'meuCarro.json'
fs.writeFileSync(CaminhoDoArquivo,objetoSerializado);


