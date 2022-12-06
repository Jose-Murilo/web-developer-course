// Crie um programa que converta a temperatura celsius ou Fahrenheit
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro
// A temperatura de entrada e de saída deve conter a letra de referência (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32


function degreeConvert(degree) {
    
    if (degree == 'C') {
        degree = (degree - 32) * 5/9
    }

    if (degree == 'F') {
        C * 9/5 + 32
    }
}


try {
    let temperature = '10C'
    console.log(`${temperature} = ${degreeConvert(temperature)}`)
} catch (error) {
    console.log(error);
}