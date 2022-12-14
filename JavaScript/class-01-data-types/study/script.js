// Segundo o ECMAScript

// >>> Primitivo Values (Strings, Number, Boolean)

// String

// let names = "José";
// let age = "29";
// console.log(typeof age);

// Funções construtoras para coverter tipo
// age = Number(age);
// age = String(age);

// console.log(typeof age);
// console.log(names);
// console.log(typeof names);

// console.log(age);
// console.log(typeof age);

// NUMBER (Integer, Float, NaN, Infinity)

// Concatenation
// let num1 = 8;
// let num2 = "2";
// num2 = Number(num2)
// let soma = num1 + num2;

// console.log(soma);
// console.log(typeof soma);


// >>> Variables Scope (Hosting) <<<
// Hosting = Elevação
// var é global
// let é local

// { // global
// var num
// // console.log(num);

// { // local
//     var num = 1;
//     console.log(num);
// }

// { // local
//     console.log(num);
// }

// }

// let
// let é local
// let vai variar ex:
// let name = 1
// name = 5

// { // global
//     let num = 5
//     // console.log(num);
    
//     { // local
//         let num = 1;
//         console.log(num);
//     }
    
//     { // local
//         console.log(num);
//     }
// }

// const
// const não vai variar
// const é local

// { // global
//     const pi = 3.14
//     // console.log(num);
    
//     { // local
//         pi = 10;
//         console.log(num);
//     }
    
//     { // local
//         console.log(num);
//     }
// }


// Boolean (True or False)

// let x = 10 == 20
// console.log(10 == 10)
// console.log(typeof x)

// let Exp = 20 == 20;
// let n1 = "10", n2 = 10;
// let n1 = "Murilo", n2 = 20;

// console.log(n1 == n2);
// console.log(n1 != n2);
// console.log(n1 !== n2);
// console.log(n1 === n2);


// >>>> Template Strings (Interpolation) <<<<

// let num1 = 20;
// let num2 = 20;
// let total = num1 + num2;

// alert("Olá");
// console.log("Num1 = " + num1);
// console.log("A soma de " + num1 + " e " + num2 + " é " + total);

// console.log(`A soma de ${num1} e ${num2} é ${total}`);

// alert(`A soma de ${num1} e ${num2} é ${total}`);


// >>>>> Type structutal (Object, functions) <<<<<

// let name = "Murilo";
// let age = 16;
// let profission = "Web Developer";

// person = {
//     name: "Emanuel",
//     age: 29,
//     profession: "Web Developer"
// };

// console.log(name);
// console.log(age);
// console.log(profession);


// console.log(typeof person);
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(`${person.name} tem ${person.age} e sua profissão é ${person.profession}`);


// Array (Vetor)

// countries = ["Brasil", "Alemanha", "Espanha"]
// countries = ["Brasil", 5, "Alemanha", 4, "Espanha",1]
countries = [
    ["Brasil", 5], 
    ["Alemanha", 4], 
    ["Espanha",1]
]

// console.log(typeof countries)
// console.log(countries)
// console.log(countries[2])
// console.log(countries[0][0])

countries = [
    {
        name: "Brasil",
        champions: 5
    },

    {
        name: "Alemanha",
        champions: 4
    },

    {
        name: "Espanha",
        champions: 1
    },
]

let country = 1; 

console.log(`${countries[country].name} tem ${countries[country].champions} titulos(s)`);