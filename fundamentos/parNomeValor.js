// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Falaa' // contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Eduardo',
    idade: 26,
    peso: 58,
    endereco: {
        logradouro: 'Rua Legal',
        numero: 344
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)