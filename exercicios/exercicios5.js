function receberPrimeiroEUltimoItem(elementos){
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

let teste = receberPrimeiroEUltimoItem([9,0,1,7])

console.log(teste)