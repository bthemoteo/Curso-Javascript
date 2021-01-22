const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//cache do objeto
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//novas instancias a partir de uma factory
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

