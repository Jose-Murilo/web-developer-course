// Crie um algoritmo que solicite o Nome e Notas 1 e 2 do aluno
// Crie uma função para calcular a sua média
// Depois apresente o nome do aluno sua média e sua situação
// O aluno será aprovado somente SE ele teve media maior ou igual a 7

const nameStudent = prompt("Digite seu nome")
const nota1 = Number(prompt("Digite sua primeira nota"))
const nota2 = Number(prompt("Digite sua primeira nota"))

function calcAverage(nota1, nota2) {
    return (nota1 + nota2) / 2
}

const average = calcAverage(nota1, nota2)
let situation

if (average >= 7) {
    situation = "Aprovado"
} else {
    situation = "Reprovado"
}

alert(`O ${nameStudent} tem media de ${average} e foi ${situation}`)