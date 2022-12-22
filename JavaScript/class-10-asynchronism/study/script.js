// >>>>>>> Asynchronism <<<<<<<

//setTimeout = Apenas uma vez
//setInterval = Seta depois de um certo tempo

console.log("Inicio");

const arrayNumbers = [12, 23, 45, 55, 68, 70, 90]
const arrayAux = []
let count = 0
let functionSetInterval = setInterval(() => {
    arrayAux.push(arrayNumbers[count])
    const numbers = document.querySelector('.numbers')
    numbers.innerHTML = arrayAux

    if (arrayAux.length == arrayNumbers.length) {
        clearTimeout(functionSetTimeOut)
        clearInterval(functionSetInterval)
    }
    count++
} , 1500)
    

let functionSetTimeOut = setTimeout(() => {
    console.log("Lógica");
}, 5000)

let isFinish = false
if (isFinish) {
  clearTimeout(functionSetTimeOut)
  clearInterval(functionSetInterval)
}

console.log(functionSetInterval);
console.log(functionSetTimeOut);
console.log('Fim');


// >>>>>>>>>> Promises <<<<<<<<<<<<<<