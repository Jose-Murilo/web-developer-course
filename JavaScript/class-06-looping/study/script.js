// >>>>> Loopings <<<<<

// While

let count = 0
// while (count <= 500) {
//     if (count % 2 == 0) {
//         console.log(count)
//     }
//     count++
// }

// while (count <= 10) {

//     if (count > 2 && count < 5) {
//         count++
//         continue
//         // break
//     }


//     if (count % 2 == 0) {
//         console.log(count)
//     }
//     count++ // container
// }
// console.log("Minha Aplicação")


// do {
//     if (count > 2 && count < 5) {
//         count++
//         continue
//         // break
//     }
        
//     if (count % 2 == 0) {
//     console.log(count)
//     }
//     count++
//     } while (count <= 10);



// For

for (let count = 0; count <= 10; count++) { // increment factor
    if (count > 2 && count < 8) {
        count ++ // Caution, two increments!
        continue
        // break
    }

    if (count % 2 == 0) {
        console.log(count)
    }
}