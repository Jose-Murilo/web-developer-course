// ARRAYS (Methods) - Principle of Immutability = Não muda nunca

// forEach não tem retorno e modifica todo o array

const team = 'Brasil'
const teams = ['Brasil', 'alemanha', 'Argentina', 'Portugal']
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

// let testReturnMap = teams.map((team, index, array) => {
//     // console.log(team, index, array)
//     return [team, index, array]
// })

// console.log(testReturnMap) // return


const real = [10, 30, 40, 20 ,50]
let dolarValue = 5.26
// const convertDollar = real.map((value) => +(value * dolarValue).toFixed(2))


// const sumReal = real.reduce((a, b) => a + b)

// const sumConvertedDollar = convertDollar.reduce((a, b) => a + b)

// console.log(convertDollar)
// console.log(sumConvertedDollar)

// console.log(real)
// console.log(sumReal)

// console.log(real.map(value => value * dolarValue).reduce((a, b) => a + b))

// console.log(real.filter((value) => value > 30))

const averageStudants = [
    {id: 1, name: 'João', average: 4, birth: 1990},
    {id: 2, name: 'Thiago', average: 6, birth: 2002},
    {id: 3, name: 'Jonas', average: 5, birth: 1998},
    {id: 4, name: 'Rosa', average: 9, birth: 2004},
    {id: 5, name: 'Amanda', average: 8, birth: 1992},
    {id: 6, name: 'Pedro', average: 7, birth: 1993},
]

// let approvedStudants = averageStudants.filter((studant) => studant.average >= 7)

// let birthStudants = averageStudants.filter((studant) => studant.birth >= 2000)

// let ageStudants = averageStudants.filter((studant) => (new Date().getFullYear() - studant.birth) >= 30)

// console.table(approvedStudants)
// console.table(birthStudants)
// console.table(ageStudants)

// >>>>> Find <<<<<

// let findStudant = averageStudants.find((studant) => (new Date().getFullYear() - studant.birth) >= 30)

// let findStudant = averageStudants.find((studant) => studant.name.toLocaleLowerCase() == 'amanda')

// let findStudant = averageStudants.find((studant) => studant.id == 5)

// console.log(findStudant)

console.log(teams.concat(real)); // concatenação de array

// Table ASCII (0-9, A-Z, a-b)
console.log(real.sort((a, b) => a - b));
console.log(teams.sort((a, b) => {
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
        return 1
    }

    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
        return -1
    }

    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
        return 0
    }
}));