// Crie um algoritmo que tenha 3 funções que faça a média,
// Transforme essa média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F):
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F:  < - 60


function averageCalculate(nota1, nota2) {
    let average = (Number(nota1) + Number(nota2)) / 2

    if (!average) {
        average = "Insira somente notas válidas"
    }

    return average
}

function abcConvert(average) {
    let averageABC

    if (average >= 90 && average <= 100) {
        averageABC = "A"
    } else if (average >= 80 && average <= 89) {
        averageABC = "B"
    } else if (average >= 70 && average <= 79) {
        averageABC = "C"
    } else if (average >= 60 && average <= 69) {
        averageABC = "D"
    } else if (average <= 59) {
        averageABC = "F"
    } else {
        averageABC = "Media invalida"
    }

    return averageABC

}

function estudantSituation(noteABC) {
    let situation

    switch (noteABC) {
        case "A":
            situation = "Excelente, aprovado com A!"
            break;
        case "B":
            situation = "Muito bem!, aprovado com B!"
            break;
        case "C":
            situation = "Aprovado com C!"
            break;
        case "D":
            situation = "Reprovado com D!"
            break;
        case "F":
            situation = "Precisa estudar mais, reprovado com F!"
            break;
        default:
            situation = "Nota ABC invalida"
            break;
    }

    return situation
}

let nota1 = 80
let nota2 = "80"

let averageStudant = averageCalculate(nota1, nota2)
let abcAverage = abcConvert(averageStudant)
let situation = estudantSituation(abcAverage)

console.log(averageStudant)
console.log(abcAverage)
console.log(situation)

