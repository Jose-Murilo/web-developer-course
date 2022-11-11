// Faça um programa que execute o IMC de cada paciente
// Os pacientes deverão estar em uma lista e conter as propriedades:
// name, height, weight
// Escreva na tela o nome do paciente  o seu imc

function calcIMC(pacient) {
    let imc = pacient.weight / (pacient.height / 100) ** 2;
    return imc.toFixed(2);
}

const listPatients = [
    {
        name: "Maria",
        height: 169,
        weight: 60 
    },

    {
        name: "João",
        height: 179,
        weight: 80 
    },

    {
        name: "Ana",
        height: 150,
        weight: 48
    },
];

// document.write(`O IMC de ${listPatients[0].name} é ${calcIMC(listPatients[0])} <br>`)
// document.write(`O IMC de ${listPatients[1].name} é ${calcIMC(listPatients[1])} <br>`)
// document.write(`O IMC de ${listPatients[2].name} é ${calcIMC(listPatients[2])} <br>`)

// for (const patient of listPatients) {
//     document.write(`O IMC de ${patient.name} é ${calcIMC(patient)} <br>`)
// }

for (let i=0; i < listPatients.length; i++) {
    document.write(`O IMC de ${listPatients[i].name} é ${calcIMC(listPatients[i])} <br>`)
}