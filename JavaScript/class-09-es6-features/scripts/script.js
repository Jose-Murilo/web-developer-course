// Modules (import & export)
// import { sum, sub, mult, div } from "./functions.js";

import { operations } from "./functions.js";

console.log('Principal');

let num1 = 12
let num2 = 33


operations.sum(num1, num2)
operations.sub(num1, num2)
operations.mult(num1, num2)
operations.div(num1, num2)


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

// >>>>>> Factory <<<<<<<<

function person(name, age) {
    return {
        name,
        age,
        canDrive: age >= 18,
        status: function status(canDrive) {
            if (this.canDrive) {
                return "Pode dirigir"
            } else {
                return "Não pode dirigir"
            }
        }
    }
}

const person1 = person("Murilo", 16)

console.log(person1.status());