const prompt = require('prompt-sync')()
let codigo = parseInt(prompt("Digite o código de origem do produto: "))

if (codigo >= 1 && codigo <= 10) {
    console.log("Região: Sul")
} else if (codigo >= 11 && codigo <= 20) {
    console.log("Região: Centro-Oeste")
} else if (codigo >= 21 && codigo <= 24) {
    console.log("Região: Norte")
} else if (codigo >= 25 && codigo <= 50) {
    console.log("Região: Nordeste")
} else {
    console.log("Produto importado ou código inválido")
}

