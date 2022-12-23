// >>>>>>> Asynchronism <<<<<<<

//setTimeout = Apenas uma vez
//setInterval = Seta depois de um certo tempo

// console.log("Inicio");

// const arrayNumbers = [12, 23, 45, 55, 68, 70, 90]
// const arrayAux = []
// let count = 0
// let functionSetInterval = setInterval(() => {
//     arrayAux.push(arrayNumbers[count])
//     const numbers = document.querySelector('.numbers')
//     numbers.innerHTML = arrayAux

//     if (arrayAux.length == arrayNumbers.length) {
//         clearTimeout(functionSetTimeOut)
//         clearInterval(functionSetInterval)
//     }
//     count++
// } , 1500)
    

// let functionSetTimeOut = setTimeout(() => {
//     console.log("Lógica");
// }, 5000)

// let isFinish = false
// if (isFinish) {
//   clearTimeout(functionSetTimeOut)
//   clearInterval(functionSetInterval)
// }

// console.log(functionSetInterval);
// console.log(functionSetTimeOut);
// console.log('Fim');


// >>>>>>>>>> Promises <<<<<<<<<<

// console.log('Fazer requisição');
// const myPromise = new Promise((resolve, reject) => {
//     let request = false
//     if (request) {
//         return resolve('Requisição aceita')
//     } else {
//         return reject('Requisição não aceita')
//     }
// })
// console.log(myPromise);
// myPromise
//     .then((answer) => console.log(answer))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Requisição encerrada!'))


// >>>>>>>>>> Async / Await <<<<<<<<<<<<<<
// async function requestData() {
//     try {
//         const promise = await myPromise
//         console.log(promise);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Requisição encerrada');
//     }
// }
    
//     requestData()
//     console.log('Finalizar requisição ');

// >>>>>>>>>> Fecth <<<<<<<<<<<
    
//     const user = 'Jose-Murilo'
//     const url = `https://api.github.com/users/${user}`
//     const userGitHub = fetch(url)
// console.log(userGitHub);

// userGitHub
// .then((request) => request.json())
// .then(({name, bio}) => {
//     console.log(`${name}: ${bio}`)
// })


// >>>>>>>>>> Exercice <<<<<<<<<<<

async function userGitHubData(user) {
    try {
        await fetch(`https://api.github.com/users/${user}`).then((request) => request.json())
        .then(({name, bio}) => {
        console.log(`${name}: ${bio}`)
    })
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Requisição encerrada!');
    }
}

userGitHubData('Jose-Murilo')
userGitHubData('EmanuelQuintino')
userGitHubData('Italo-Morais')