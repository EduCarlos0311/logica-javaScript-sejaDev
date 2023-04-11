//TODAS AS FUNÇÕES UTILIZADAS AQUI SÃO ARROW FUNCTIONS

const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

// forEach: Passa por todos os elementos do array
// array.forEach((elemento, posicao) => {
//     // console.log(`${elemento} - Posição ${posicao}`)
// })

//find: retorna o elemento (Faz mais sentido quando utilizada em objetos)
// const valor = array.find(e => e === 10)
// console.log(valor)

// //findIndex: Retorna a posição de elemento
// const index = array.findIndex(e => e === 10)
// console.log(index)

// //some: Retona true se pelo menos um elemento satisfazer a condição
// const some = array.some(e => e >= 42)
// console.log(some)

// // every: Retorna true somente se todos os elementos respeitarem a condição
// const every = array.every(e => e >= 1)
// console.log(every)

////////////////Nvo array para exemplos com novas funções
const newArray = [1, 2, 3, 4, 5]

// splice: Corta o array, o primeiro parametro é o ínicio e o segundo é a quantidade 
//console.log(newArray.splice(1, 2))

//map: Altera todos os valores dentro do array seguindo uma regra
// console.log(newArray.map((elemento) => {
//     return elemento * 2
// }))

//filter: Filtra os elementos dentro do array
// console.log("Nova lista de elementos pares", newArray.filter((elemento) => {
//     return elemento % 2 === 0 
// }))

///reduce: Reduz o array pra algum outro elemento
console.log(newArray.reduce((acumulado, elemento) => {
    return acumulado + elemento
}, 0))