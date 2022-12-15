// Questão 1 (Data Types):
// Declare as seguintes variáveis e atribua os valores por tipo: 
// String, Number, Function, Array, Object

let name = "Murilo"
let age = 16
let walk = function walk() {
    console.log("Está andando")
}

let numbers = [1, 2, 3, 4]
let names = {
    name: "Pedro",
    name: "João",
    name: "Maria",
}

// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;
let sum = 12 + 3 
let sub = 12 - 3
let mut = 12 * 3
let div = 12 / 3
let exp = 12 ** 3
let res = 12 % 3
let raiz = 144 ** (1/2)
// let raiz = Math.sqrt(144)

console.log(`a soma de 12 + 3 = ${sum}`);
console.log(`a subtração de 12 - 3 = ${sub}`);
console.log(`a multiplicação de 12 * 3 = ${mut}`);
console.log(`a divisão de 12 / 3 = ${div}`);
console.log(`a potenciação de 12 ** 3 = ${exp}`);
console.log(`o resto da divisão de 12 % 3 = ${res}`);
console.log(`a raiz de 144 = ${raiz}`);


// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" e imprima seu retorno.
function test() {
    return console.log("JavaScript")
}
test()

// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.
let myArray = [1, 2, 3]
myArray.shift()
myArray.unshift(0)
myArray.push(5)

console.log(myArray)

// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])    
}

// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let looping = 0
while (looping <= 500) {
    if (looping > 199 && looping <= 399) {
        looping++
        continue;
    }   

    console.log(looping)
    looping++
}


// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

let speed = 60
let speedDriver = 55

if (speedDriver > 60) {
    console.log("Você foi multado por excesso de velocidade")
} else if (speedDriver < speed / 2){
    console.log(`Foi multado por velocidade baixa`)
}


// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus increasefuncionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000]
const newSalary = salary.map((salary) => salary + (salary / 10))
let spending = newSalary.reduce((a, b) => a + b)

// console.log(salary)
console.log(newSalary)
console.log(`O gasto da empresa com os 10% é = R$ ${spending}`)