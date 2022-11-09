// Solicite 2 números: solicitar = pedir
// Apresente as operações e os resultados no documento(função write).
// Crie constantes com as operações de +, -, *, /, %, ** e raiz para os números solicitados.

const numberOne = Number(prompt("Digite o primeiro número:"));
const numberTwo = Number(prompt("Digite o segundo número:"));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mut = numberOne * numberTwo;
const div = numberOne / numberTwo;
const res = numberOne % numberTwo;
const exp = numberOne ** numberTwo;
const sqr = numberOne ** (1/numberTwo);

document.write(`A soma de ${numberOne} e ${numberTwo} = ${sum} <br> `);
document.write(`A subtração de ${numberOne} e ${numberTwo} = ${sub} <br>`);
document.write(`A multiplicação de ${numberOne} e ${numberTwo} = ${mut} <br>`);
document.write(`A divisão de ${numberOne} e ${numberTwo} = ${div.toFixed(2)} <br>`);
document.write(`O resto de ${numberOne} e ${numberTwo} = ${res} <br>`);
document.write(`A potência de ${numberOne} e ${numberTwo} = ${exp} <br>`);
document.write(`A raiz de ${numberTwo} e ${numberOne} = ${sqr.toFixed(2)}<br>`);

// .toFixed(2) = Ele vai fixar 2 casas decimais