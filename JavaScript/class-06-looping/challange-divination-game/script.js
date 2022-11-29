// Crie um algoritmo que adivinhe um número de 1 a 10
// Capture os números do usuário via prompt enquanto ele errar
// Se acertar apresente a mensagem: Parabêns!, acertou o número 'X' em 'N' tentativas
// O programa deve ser encerrado caso o usuário clique em cancelar.

const numberRandom = Math.ceil(Math.random() * 10)

let count = 1
while (true) {
    let numberUser = prompt("Adivinhe um numero de 1 a 10")

    if (numberUser == '') {
        alert("Digite um número!")
    }

    if (numberUser == null) {
        alert("Programa encerrado")
        break;
    }

    if (numberUser > 10 || numberUser <= 0) {
        alert("Atenção, número fora do intervalo de 1 a 10")
    }

    if (Number(numberUser) == numberRandom) {
        alert(`Parabêns!, acertou o número ${numberRandom} em ${count} tentativas`)
        break;
    }

    count++
}