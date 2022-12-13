// Construa uma lógica para dizer se um número é par ou impar
// Receba o número desejado do usuário via promp
// Escreva na tela o numero e se ele é par ou é impar

let numberUser = Number(prompt("Digite um número"))

console.log(typeof numberUser)

if (numberUser % 2 == 0) {
    alert(`O número ${numberUser} é par`)
}

if (numberUser % 2 == 1) {
    alert(`O número ${numberUser} é impar`)
}