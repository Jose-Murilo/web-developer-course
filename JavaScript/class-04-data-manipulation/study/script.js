// >>>>> Data Manipulation <<<<<

// Prototype (Chain)

function Car(motorPower) {
    this.motor = motorPower
}

// console.log(new Car("v8").motor)

let myName = "Murilo"
let age = 16
let phrase = "Eu sou Web Developer"

// console.log(myName.__proto__)
// console.log(age)

// >>>>> Strings <<<<<


// console.log(myName.length)
// console.log(myName[1])
// console.log(myName.toLowerCase())
// console.log(myName.toLocaleUpperCase())

// console.log(phrase.split(","))
// console.log(phrase.split(" ").join("_"))

// console.log("Web" == "web")
// console.log(phrase.includes("Web"))
// console.log(phrase.toLocaleLowerCase().includes("web"))
// console.log(phrase.toLocaleUpperCase().includes("WEB"))


// <<<<< Numbers >>>>>

let num = 789
let num1 = 7.287
let num2 = -7.9876

// console.log(String(num).length)
// console.log(String(num1).replace(".", "").length)
// console.log(String(num1.toFixed()).replace(".", ","))
// console.log(Number(num1).toFixed())

// Convert Currency (International Standard Currency Code ISO 4217)
// console.log(num1.toLocaleString("pt-BR")) // Boa pratica
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "brl"}))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "usd"}))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "eur"}))


// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.abs(num2))

// console.log(Math.min(2, 64, 3, 764, 85, 869, 77))
// console.log(Math.max(2, 64, 3, 764, 85, 869, 77))

// console.log(Math.ceil(num1))
// console.log(Math.round(num1))
// console.log(Math.floor(num1))

// console.log(Math.round(Math.random().toFixed(1) * 10)) // IMPORTANTE DE MAIS


// >>>>>>>>>>>>>> Date Manipulation <<<<<<<<<<<<

// let dateNow = new Date()
let date1 = new Date("2022-03-01 12:03:19")
let date2 = new Date("2022-04-01 12:03:19")

// document.write(dateNow)
// let hour = dateNow.getHours()
// let minutes = dateNow.getMinutes()
// let seconds = dateNow.getSeconds()
// let milliseconds = dateNow.getMilliseconds()

// document.write(`${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`)

// date1.setHours(date1.getHours() - 3)
// date1.setMinutes(date1.getMinutes() + 60)
// date1.setSeconds(date1.getSeconds() + 60)

// document.write(date1.toLocaleTimeString("pt-BR"))


// let day = dateNow.getDay()
// let date = dateNow.getDate()
// let month = dateNow.getMonth() + 1
// let year = dateNow.getFullYear()
// let minutes = date1.getMinutes()
// let seconds = date1.getSeconds()

// document.write(day + 1) // 0 - 6
// document.write(date)
// document.write(month + 1) // 0 - 11
// document.write(year)

// document.write(`${String(date).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`)

// dateNow.setDate(dateNow.getDate() + 30)
// dateNow.setMonth(dateNow.getMonth() + 2)
// dateNow.setFullYear(dateNow.getFullYear() + 30)

// document.write(dateNow.toLocaleDateString("pt-BR"))

// document.write(dateNow.toLocaleString("pt-BR"))

                                    //   s      m    h    d
// document.write(Math.abs(date1 - date2) / 1000 / 60 / 60 / 24)



// >>>>>>>>>>>> Array Manipulation <<<<<<<<<<<<<

// let myArray1 = [1, "a", "A"] 
// let myArray2 = Array(1, "a", "A") // Construtora
// console.log(myArray1)


// let myArray = Array(1, "a", () => "A" )
// console.log(myArray)
// console.log(myArray.length)
// console.log(myArray[2]())

let techs = ['HTML', 'CSS', 'Git']

techs.push('JavaScript') // Insere no topo/ultimo
// document.write(techs)
// let removeElement = techs.pop() // Remove do topo/ultimo (LIFO "Pilha")
// alert(`Elemento ${removeElement} foi removido com sucesso`)
// document.write(techs)

techs.unshift('SQL') // Inserir no inicio
// document.write(techs)
// let removeElement = techs.shift() // Remove do inicio (FIFO "Fila")
// document.write(techs)

// console.log(`${removeElement} foi removido!`)


// document.write(techs)

let index = techs.indexOf('Git')
// techs.splice(2, 1)
// techs.splice(index, 1)
// document.write(techs)
// console.log(techs.splice(index, 1))
// techs.splice(techs.indexOf("SQL"), 1)

// document.write(techs.sort())
nums = [2, "2", 2, 1, 5, 19, 10, 20]
document.write(nums.sort((a, b) => a - b))

// document.write(`${techs} <br>`)
// document.write(techs.slice(0, -2))

// console.log(techs.sort())
// console.log(index)