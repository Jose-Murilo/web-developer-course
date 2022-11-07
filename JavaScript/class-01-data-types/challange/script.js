// Faça um programa que solicite (prompt) o nome do usuáio, dê as boas vindas e avise que irá fazer uma soma: Ex: Bem-vindo "nome", vamos fazer uma soma!

// Apresente a soma dos números com alerta na tela Ex: A soma do "número1" e o "número2" é "soma". (Use Template String) 

let userName = prompt("Digite seu nome: ");
alert(`Olá, ${userName} vamos fazer uma soma!`);

let firstNumber = Number(prompt("Digite o primeiro número"));
let secondNumber = Number(prompt("Digite o segundo número"));
let sum = firstNumber + secondNumber;

alert(`A soma do ${firstNumber} e o ${secondNumber} é a ${sum}`);

console.log(typeof firstNumber);