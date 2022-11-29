// ARRAYS (Methods) - Principle of Immutability = Não muda nunca

// forEach não tem retorno e modifica todo o array

const team = 'Brasil'
const teams = ['Brasil', 'Alemanha', 'Argentina', 'Portugal']
// console.log(teams)

// let teamArray = Array.from('Brasil')
// teamArray.forEach((value, index, array) => {
//     console.log(value, index, array)
// })
// console.log(teamArray)
// let testReturnForEach = team.forEach((team, index, array) => {
//     console.log(team, index, array)
// })

// console.log(testReturnForEach) // no return

// >>>> .map tem retorno e não modifica o array original <<<< boa pratica

let testReturnMap = teams.map((team, index, array) => {
    // console.log(team, index, array)
    return [team, index, array]
})

console.log(testReturnMap) // return

const real = [10, 20, 30, 40, 50]
// const convertDollar = real.map((value) => value * 5.36)
// const sumReal = real.reduce((a, b) => a + b)

// const sumConvertedDollar = convertDollar.reduce((a, b) => a + b)

// console.log(convertDollar)
// console.log(sumConvertedDollar)

// console.log(real)
// console.log(sumReal)

// console.log(real.map(value => value * 5.36).reduce((a, b) => a + b))

// console.log(real.filter((value) => value > 30))

// const avaregeStudants = [
//     {name: 'João', avarege: 2},
//     {name: 'Thiago', avarege: 4},
//     {name: 'Pedro', avarege: 7},
//     {name: 'Jonas', avarege: 5},
//     {name: 'Rosa', avarege: 9},
// ]

// let approvedStudants = avaregeStudants.filter((value) => {
//     if (value.avarege >= 7) {
//         return console.log(value.name)
//     }
// })

// console.log(approvedStudants)