//Crie uma função que retorna a string "Olá, " concatenada com um argumento text 
//(a ser passado para a função) e com ponto de exclamação "!" no final.

cumprimentar = texto => console.log('Olá '+texto+'!')
cumprimentar('Bruna')

//Escreva uma função que receba a idade de uma pessoa em anos 
//e retorne a mesma idade em dias.
function converterIdadeDias(idade) {
    const diasDoAno = 365
    return idade * diasDoAno
}
console.log(converterIdadeDias(25))

/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas 
por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve 
ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.*/

function calcularSalario(horasTrabalhadas, valorHora){
    let totalSalario = horasTrabalhadas * valorHora
    return `Salário igual a R$ ${totalSalario}`
}
console.log(calcularSalario(2,100))