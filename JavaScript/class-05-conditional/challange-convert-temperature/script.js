// Crie um programa que converta a temperatura celsius ou Fahrenheit
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro
// A temperatura de entrada e de saída deve conter a letra de referência (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32


// DOM
let div = document.querySelector("div")
div.style.fontSize = '50px'
div.style.textAlign = 'center'


function degreeConvert(degree) {
    let auxConvert = String(degree).split(" ").join("")
    let scale = Array.from(auxConvert)
    let removeElement = scale.pop()
    let temp = Number(scale.join(""))

    // if (isNaN(removeElement)) {
    //     throw new Error(alert("Insira somente Fahrenheit ou Celsius ex: (10C e 50F)"))
    // }

    if (removeElement.toUpperCase() !== 'C' && removeElement.toUpperCase() !== 'F') {
        throw new Error(alert("Insira somente Fahrenheit ou Celsius ex: (10C e 50F)"))
    }

    if (removeElement.toUpperCase() == "C") {
        let C = temp * 9/5 + 32
        return C.toFixed(0) + 'F'
    } 
    
    if (removeElement.toUpperCase() == "F") {
        let F = (temp - 32) * 5/9
        return F.toFixed(0) + 'C'
    } else {
        throw new Error("Escala inválida (Ex: 10F ou 20C)")
    }
}

try {
    let temperature = '10F'
    div.innerHTML = (`${temperature} = ${degreeConvert(temperature)}`)
} catch (error) {
    console.log(error);
}