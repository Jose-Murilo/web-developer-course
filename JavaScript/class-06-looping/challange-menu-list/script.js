// Faça um Menu com as seguintes opções:
/*
    Digite a opção desejada:
    1 - Cadastrar item
       OK - Poder cadastrar itens enquanto não cancelar
       OK - Alertar usuário para adicionar item caso não informe
       OK - Mostrar mensagem de sucesso junto do nome ao cadastrar
       OK - Fazer alerta de item cadastrado caso ele já esteja cadastrado
        
    2 - Ver itens cadastrados
       OK - Mostrar itens cadastrados
       OK - Alertar caso a lista esteja vazia

    3 - Remover item cadastrado
       OK - Alertar caso a lista esteja vazia
       OK - Poder remover itens pelo nome enquanto não cancelar
       OK - Remover item automaticamente caso só tenha um na lista
       OK - Mostrar mensagem de sucesso junto do nome ao remover
       OK - Alertar usuário caso o item informado não seja encontrado

    4 - Sair do programa
       OK - Sair do programa quando escolher a opção 4 ou cancelar
       OK - Se não escolher uma das opções do menu mostrar mensagem de alerta
*/

const listItens = []
let menuOption

while (true) {
    menuOption = prompt(`
    Digite a opção desejada:
    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `)

    switch (menuOption) {
        case "1":
            while (true) {
                let item = prompt("Digite o nome do item")

                if (item === null) {
                    break;
                }

                if (item === '') {
                    alert("Digite um nome para cadastrar")
                    continue;
                }

                if (listItens.includes(item)) {
                    alert("Item já cadastrado")
                } else {
                    listItens.push(item)
                    alert(`"${item}" cadastrado com sucesso`)
                }
            }
            break;

        case "2":
            if (listItens.length == 0) {
                alert("Lista vazia!")
            } else {
                alert(listItens)
            }
            break;

        case "3":
            if (listItens.length == 1){
                alert(`Item "${listItens[0]}" foi removido com sucesso!`)
                listItens.pop()
                break;
            }

            while (true) {
                if (listItens.length == 0) {
                    alert("Lista vazia!")
                    break;
                } else {
                    let item = prompt("Digite o nome para cadastrar")

                    if (item === null) {
                        break;
                    }

                    if (item === '') {
                        alert("Digite um nome para cadastrar")
                        continue;
                    }

                    if (listItens.includes(item)) {
                        listItens.splice(listItens.indexOf(item), 1)
                        alert(`"${item}" foi removido`)
                    } else {
                        alert("Este item não encontrado")
                    }
                }
            }
            break;

        default:
            break;
    }

    if (menuOption === '4' || menuOption === null) {
        break;
    }

    if (menuOption === '') {
        alert("Por favor escolha uma opção")
        continue;
    }

    console.log(listItens);
}
alert("Programa encerrado")