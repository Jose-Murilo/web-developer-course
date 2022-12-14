// Crie uma lógica para calcular o somatório das Receitas e das Dispesas abaixo
// Imprima os somatórios e o saldo formatado no padrão brasileiro,
// Informe se a situação está Positiva ou Negativa e se existe dividas.
// Dica: Trate os dados com os métodos de array

const incomes = [
    'salary', 'R$ 2000,00',
    'commission', 'R$ 825,45',
    'bônus', 'R$ 1320,00'
]

let incomesValues = incomes.filter((value) => value.includes('R$'))
const incomesValueNumbers = incomesValues.map((value) => Number(value.replace("R$ ", "").replace(",", ".")))
let incomesSum = incomesValueNumbers.reduce((a, b) => a + b)
// console.log(incomesSum);

const expenses = [
    'rent', 'R$ 500,00',
    'energy', 'R$ 325,55',
    'water', 'R$ 120,34',
    'food', 'R$ 1300,62'
]

let expensesValues = expenses.filter((value) => value.includes('R$'))
const expensesValueNumbers = expensesValues.map((value) => Number(value.replace("R$ ", "").replace(",", ".")))
let expensesSum = expensesValueNumbers.reduce((a, b) => a + b)

let balence = incomesSum - expensesSum
let situation

if (balence < 0) {
    situation = 'Welcome to Serasa'
} else if (balence == 0) {
    situation = 'Escapou fedendo!'
} else {
    situation = 'Congratulations, tu é o bixão!'
}

console.log(`Gastos: ${incomesSum.toLocaleString('pt-BR', {style: 'currency', currency: 'brl'})}`);
console.log(`Dispesas: ${expensesSum.toLocaleString('pt-BR', {style: 'currency', currency: 'brl'})}`);
console.log(`Saldo: ${balence.toLocaleString('pt-BR', {style: 'currency', currency: 'brl'})}`);
console.log(situation);
