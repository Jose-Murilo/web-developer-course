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



// >>>>> Date Manipulation <<<<<

let date = new Date()
let date1 = new Date("2022-03-01 12:03:19")
let date2 = new Date("2022-04-01 15:03:19")

// document.write(date)
// let hour = date1.getHours() // Para horas
// let minutes = date1.getMinutes() // Para minutos
// let seconds = date1.getSeconds() // Para segundos

// document.write(`${String(hour).padStart(2, "0")}: ${String(minutes).padStart(2, "0")}: ${String(seconds).padStart(2, "0")}`)

// date1.setHours(date.getHours() - 3)
// date1.setMinutes(date.getMinutes() + 60)
// date1.setSeconds(date.getSeconds() + 60)

// document.write(date1.toLocaleTimeString("pt-BR"))



let day = date.getDay() // Para Dia
let data = date.getDate() // Para Mês
let month = date.getMonth() + 1 // Para Mês
let year = date.getFullYear() // Para Ano
// let minuts = date.getMinutes() // Para Ano
// let seconds = date.getSeconds() // Para Ano

// document.write(day + 1) // 0 - 6
// document.write(data) 
// document.write(month + 1) // 0 - 12
// document.write(year)
// document.write(`${String(data).padStart(2, "0")}/${(String(month).padStart(2, "0"))}/${year}`)

// date.setDate((date.getDay() + 30))
date.setDate((date.getMonth() + 2))
date.setDate((date.getFullYear() + 30))

// document.write(date1.toLocaleString("pt-BR"))

// document.write(date1.toLocaleString("pt-BR"))

document.write(Math.floor((date2 - date1) / 1000 / 60 / 60 / 24))