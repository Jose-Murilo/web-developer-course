const digitalClock = document.querySelector("#clock")

setInterval(() => {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let milliseconds = date.getMilliseconds()

    digitalClock.innerHTML = `${String(hour)
    .padStart(2, "0")}: ${String(minutes)
    .padStart(2, "0")}: ${String(seconds)
    .padStart(2, "0")}: ${String(milliseconds)
    .padStart(2, "0")} `
            
    console.log("A")
}, 10);