// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

//M = C (1+ i)^n
// M é o montante
// C é o Capital Inicial
// i é a taxa de juros (em valor decimal)
// n é o número de períodos que o capital ficou aplicado

function retornarMontanteSimples(capitalInicial, taxaJuros, tempoAplicado){
    montanteSimples = capitalInicial * taxaJuros * tempoAplicado
    dinheiro = montanteSimples.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    console.log(dinheiro)
}

function retornarJurosComposto(capitalInicial, taxaJuros, tempoAplicado){
    montanteComposto = capitalInicial* Math.pow(1+taxaJuros,tempoAplicado)
    dinheiro = montanteComposto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'} )
    console.log(dinheiro)
}

retornarMontanteSimples(2000, 0.10, 2)
retornarJurosComposto(300, 0.01, 12)