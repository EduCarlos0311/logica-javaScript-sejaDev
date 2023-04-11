/*
Dado um número, construir uma lógica para imprimir o nome do mês do número
exemplo:

1 - console.log("Janeiro")
2 - console.log("Fevereiro")
...
12 - console.log("Dezembro")
!== 12 - console.log("Mês inexistente")
*/ 

let numero = 1

/*if (numero === 1) {
    console.log("Janeiro")
} else if (numero == 2) {
    console.log("Fevereiro")
} else if (numero == 3) {
    console.log("Março")
} else {
    console.log("Mês inexistente")
}
*/

switch (numero) {
    case 1:
        console.log("Janeiro")
    break
    case 2:
        console.log("Fevereiro")
    break
    case 3:
        console.log("Março")
    break
    default:
        console.log("Mês inexistente")
}