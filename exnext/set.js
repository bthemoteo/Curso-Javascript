// nao aceita repetica/ nao indexada
const times = new Set()
times.add('Botafogo')
times.add('Vasco').add('Flamngo').add('Fluminense')
times.add('Botafogo')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('botafogo'))
console.log(times.has('Botafogo'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas' ]
const nomesSet = new Set(nomes)
console.log(nomesSet)
