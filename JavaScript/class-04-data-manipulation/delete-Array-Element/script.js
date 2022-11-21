// Crie uma função que remova os elementos de um Array através do parâmetro
// O algoritimo deve funcionar com tipo texto e tipo numérico
// Valide para receber espaços, letras maiúsculas e letras minúsculas.

let techs = ['HTML', 15, 'CSS', 15, 'JavaScript', 30, 'SQL', 10, 'Git', 8];

function deleteArrayElements(techName) {
    let auxArray = techs
    techs = []

    auxArray.map(element => {
        // document.write(`${element} <br>`)

        if (String(techName).toLocaleLowerCase().split(" ").join("") != String(element).toLocaleLowerCase().split(" ").join("")) {
           techs.push(element)
        }
    })
}

deleteArrayElements("Javascript")
document.write(techs)


// .map() vai mapear os elementos dentro do Array.