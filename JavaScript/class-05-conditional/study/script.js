// >>>>> conditional <<<<<

// >>>>> IF, Else <<<<<

// let thereSmook = true

// if (thereSmook) {
//     window.alert("Corre pessoal!!!")
// }

// let age = Number(prompt("Digite sua idade:"))
// age = Math.abs(age)

// if (age >= 18) {
//     console.log("Maior de idade")
// } else {
//     console.log("Menor de idade")
// }


// Condicional Composto (if dentro do if)

// if (age >= 16) {
//     if (age >= 18 && age <= 70) {
//         console.log("Voto obrigatorio!")
//     } else {
//         console.log("Voto facultativo")
//     }
// } else {
//     console.log("Não pode votar")
// }


// let weekDay = 7 // 1 - 7
// let day
// switch (weekDay) {
//     case 1:
//         day = "Domingo"
//         break;
//     case 2:
//         day = "Segunda"
//         break;
//     case 3:
//         day = "Terça"
//         break;
//     case 4:
//         day = "Quarta"
//         break;
//     case 5:
//         day = "Quinta"
//         break;
//     case 6:
//         day = "Sexta"
//         break;
//     case 7:
//         day = "Sabado"
//         break;
//     default:
//         console.log("Dia não encontrado")
//         break;
// }

// console.log(day)


// >>>>>>> Try, Catch, Throw and Finally <<<<<<<<<

try {
    throw new Error('Numero fora do intervalo de 1 a 7')
    myFunction()
} catch (error) {
    console.log(error)
}

document.write("Rodando aplicação...")
