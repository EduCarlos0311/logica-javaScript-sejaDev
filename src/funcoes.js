/*
    Desenvolver uma calculadora usando functions
*/

let a = 5;
let b = 2;

const operacao = "*";

function soma () {
    return a + b;
};

function subtracao () {
    return a - b;
};

function multiplicacao () {
    return a * b;
};

function divisao () {
    return a / b;
};

function calculadora () {
    if (operacao === "+") return soma();
    else if (operacao === "-") return subtracao();
    else if (operacao === "*") return multiplicacao();
    else if (operacao === "/") return divisao();
    else return "Operação inválida!";
};

// console.log(calculadora());

/*
    Faça uma função que verifica se um número é par ou não
*/

function par (num) {
    return num % 2 == 0;
};

const ePar = par(4);
console.log(ePar);

/*
    Listar os números pares de 0 á 100
*/

for (let i = 0; i <= 100; i++) {
    if (par(i)) console.log(i);
};