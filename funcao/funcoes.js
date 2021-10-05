function nomeDaFuncao(parametro1, parametro2) {
    return console.log(parametro1 + parametro2) // o que a funçao faz
}

// parametro: informacao que vem de fora da funcao

nomeDaFuncao(2, 10) // invocando a funcao

// FUNÇÃO ANONIMA

let teste = function(a , b) {
    return console.log(a + b)
}
// ARROW FUNCTION

let minhaFuncao = () => 2+3
console.log(minhaFuncao())

// FUNÇÃO AUTO EXECUTAVEL

(function() {
    return console.log(15 + 15)
})()