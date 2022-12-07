// Crie um programa que converta a temperatura celsius ou Fahrenheit
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro
// A temperatura de entrada e de saída deve conter a letra de referência (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32


function degreeConvert(degree) {
    let auxDegree = String(degree).split(" ").join("")
    let arrayDegree = Array.from(auxDegree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""))

    console.log(auxDegree)
    console.log(degree)
    console.log(arrayDegree)
    console.log(scaleDegree)
    console.log(newDegree)
    
    if (isNaN(newDegree)) {
        throw new Error('Insira uma temperatura válida')
    }

    if (scaleDegree.toUpperCase() == "C") {
        return (newDegree * 9/5 + 32).toFixed(0).toLocaleString("pt-BR")+ 'F'
    } else if (scaleDegree.toUpperCase() == "F") {
        return ((newDegree - 32) * 5/9).toFixed(0).toLocaleString("pt-BR") + 'C'
    } else {
        throw new Error("Escala inválida")
    }
}

try {
    let temperature = '0C'
    console.log(`${temperature} = ${degreeConvert(temperature)}`)
} catch (error) {
    console.log(error);
}