let valor //Não atribui nada

console.log(valor)
// console.log(valor2

valor = null // Ausencia de valor
console.log(valor)
//console.log(valor.toString()) //typeError!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto.preco)

delete produto.preco
console.log(produto)

produto.preco = null
console.log(produto.preco)
console.log(!!produto.preco)

console.log(produto)

