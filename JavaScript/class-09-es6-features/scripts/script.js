// Modules (import & export)
// import { sum, sub, mult, div } from "./functions.js";

// import { operations } from "./functions.js";

// console.log('Principal');

// let num1 = 12
// let num2 = 33


// operations.sum(num1, num2)
// operations.sub(num1, num2)
// operations.mult(num1, num2)
// operations.div(num1, num2)


// sum(num1, num2)
// sub(num1, num2)
// mult(num1, num2)
// div(num1, num2)


// >>>>>> Orientação a objeto <<<<<<<

// >>>>>>> Class <<<<<<<

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.canDrive = age >= 18
//         this.status = () => {
//             if (this.canDrive) {
//                 return "Pode dirigir"
//             } else {
//                 return "Não pode dirigir"
//             }
//         }
//     }
// }

// const person1 = new Person('Murilo', 16)

// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.canDrive)
// console.log(person1.status())

// //>>>>>>> Factory (Creational Design Pattern ) <<<<<<<<<<

// function person(name, age) {
//     return {
//         name,
//         age,
//         canDrive: age >= 18,
//         status: function status(canDrive) {
//             if (this.canDrive) {
//                 return "Pode dirigir";
//             } else {
//                 return "Não pode dirigir";
//             }
//         }
//     }
// }

// const person2 = person("José", 18)
// console.log(person2.status());


// >>>>>>> Destructure <<<<<<<

// const array = ["A", "B"]
// const [item1, item2] = array
// console.log(array);
// console.log(item1);
// console.log(item2);

// >>>>>>> Rest Operator <<<<<<<

// function showArray(...array) {
//     console.log(array);
//     // console.log(second);
// }
// showArray(2, 4, 5, 6, 7)

// function showArray(array, ...numbers) {
//     console.log(array);
//     console.log(numbers);
// }

// showArray(array, 4, 5, 6, 7)


// >>>>>>> Spread Operator <<<<<<<

// const numbers = [2, 3, 4, 6, 5]
// const clone = [...numbers] // Clona
// clone.pop()
// const [...clone2] = numbers // Ele clona também

// console.log(numbers);
// console.log(clone);
// console.log(clone2);
// console.log(...numbers);
// console.log(Math.max(...numbers));
// console.log(Math.max('1', '2', '3'));


// >>>>>>> Exemplo <<<<<<<

const list = document.querySelectorAll('div')
console.log(list);

// list.forEach((value) => console.log(value))

[...list].map((value) => console.log(value))

let number; number = 7
console.log(number);

// ASI (Automatic Semicolon Insertion)

// Babel (ES6 to ES5)
// - Parser: Code 5 to AST (Abstract Syntex Tree)
// - Transformer: AST Manipulates (JSON)
// - Generator: AST to Code 5