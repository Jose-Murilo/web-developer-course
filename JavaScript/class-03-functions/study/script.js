// Functions Statements

// >>> Named <<<

// function myTest() {
//     console.log("Testando a função")
// }

// myTest();
// myTest();
// myTest();

// function myTest(text) { // parameters
//     console.log(text)
// }
// myTest("Testando a função");


// ---------------------------

// function somar(num1, num2) {
//     let soma = num1 + num2 // Atenção para o operador chave
//     return soma;
// }
// console.log(somar(20, 30))



// >>> Anonymous Functions <<<

// let sum = function (num1, num2) {
//     let soma = num1 + num2 // Atenção para o operador chave
//     return soma;
// }
// console.log(sum(2, 3));


// >>> Arrow Functions <<<

// let sum = (num1, num2) => num1 + num2
// console.log(sum(2, 3));
// Quando é uma unica linha não precisa de chave.

let sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(2, 3));


// >>> Constructor Functions <<<

function Car(brandName, motorPower) {
    this.brand = brandName
    this.motor = motorPower
    this.walk = () => console.log("Runnig...")
}

const ferrari = new Car("Ferrari", "2.4")
const camaro = new Car("Chevrolet", "1.4")
const mustang = new Car("Ford", "1.4")
const porshi = new Car("Ford", "1.4")

console.log(ferrari.brand)
console.log(camaro.motor)
console.log(camaro.brand)
console.log(porshi.walk())

// Number()
// Car()