// USANDO FUNÇÃO


/*
Crie um algorítimo para calcular o fatorial de um número n

Obs.: O fatorial de um número é calculado pela multiplicação 
desse número por todos os seus antecessores até chegar ao número 1

Exemplos: 
2! = 2*1
3! = 3*2*1
4! = 4*3*2*1
*/

// function fatorial (num) {
//     let resultFat = 1
    
//     while (num >= 2) {
//         resultFat = resultFat * num
//         num--
//     }
//     return resultFat
// }

// console.log(fatorial(4))


//USANDO FUNÇÃO RECURSIVA

function fatorial (n) {
    if (n <= 2) return n
    return fatorial (n - 1) * n
}

console.log(fatorial(4))