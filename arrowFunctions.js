// Maneiras de se utlizar Arrow Functions

function ola () {
    console.log("Ola");
};

const arrowOla = () => {
    console.log("Arrow Olá");
};

const soma = (a, b) => a + b;
const epar = num => num % 2 === 0;

console.log(epar(2));
console.log(epar(3));
console.log(soma(10, 20))