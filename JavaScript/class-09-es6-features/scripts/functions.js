/*export*/ function sum(num1, num2) {
    console.log(num1 + num2);
}

/*export*/ function sub(num1, num2) {
    console.log(num1 - num2);
}

/*export*/ function mult(num1, num2) {
    console.log(num1 * num2);
}

/*export*/ function div(num1, num2) {
    console.log(num1 / num2);
}

// export { sum, sub, mult, div }

export const operations = ({
    sum,
    sub,
    mult,
    div
})