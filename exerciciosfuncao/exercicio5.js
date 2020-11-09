function formatarFloat(valor){
    dinheiro = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    console.log(dinheiro)
}

formatarFloat(3,000009)
formatarFloat(54,0938883)