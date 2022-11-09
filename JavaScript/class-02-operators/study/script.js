let num1 = 3
let num2 = 3

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
// console.log(num1 ** num2)
// console.log(25 ** (1/2)) // Raiz Quadrada

// console.log(++num1) // Pré encremento
// console.log(--num1) // Pré encremento

// console.log(num1++) // Pos encremento Ou seja na linha seguinte
// console.log(num1--) // Pos encremento
// console.log(num1);


// >>>> Operador de atribuição <<<<

// num1 = num1 + 2
// num1 += 3
// num1 -= 2
// num1 *= 3
// num1 /= 3
// num1 %= 4
// console.log(num1)


// >>>> Comparasion Operators (Boolean) <<<<

// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 <= num2)
// console.log(num1 >= num2)
// console.log(num1 != num2)


// console.log(num1 == num2)
// console.log(num1 === num2)



// >>>> Logical Operators (Boolean) <<<<

// and &&
// or ||
// not !

let economizarDinheiro = true
let juntarDinheiro = true

// console.log(economizarDinheiro && juntarDinheiro)
// console.log(!economizarDinheiro && juntarDinheiro)


let guardarSelic = true;
let pegarEmprestimo = false;

// console.log(guardarSelic || pegarEmprestimo)
// console.log(!guardarSelic) // Negar alguma coisa !


// >>>> Operators (Binary) <<<<
// Binary = 2
let n1 = 8;
let n2 = 7;

// console.log(n1 + n2);
// console.log("Test " + n2);
// console.log(n2 + "5");


// >>>> Operators (Unary) <<<<
// Binary = 1
// console.log(n1)
// console.log(++n1);
// console.log(n1++);
// console.log(n1);

// console.log(typeof n1);

// const fruits = [
//     "Banana",
//     "Mamão",
//     "Uva"
// ]
// delete fruits[1];
// console.log(fruits);


// >>>> Operators (Ternary) <<<<

let avarege = 7;

console.log(avarege >= 7 ? 'Aprovado' : 'Reprovado');

// >>>> Operators (Truthy and False) <<<<

// * Cuidado com valores Truthy e False onde o booleano é considerado obrigatório (condicionais e loops).
        
// Truthy               False
// 1, 1.5, -1           0
// " ", "0", "false"    ""
// {}                   null
// []                   undefined
// Infinity, -Infinity  NaN

// console.log( 1 ? 'yes' : 'no')
// console.log( "" ? 'yes' : 'no')
// console.log( "0"? 'yes' : 'no')
// console.log( {} ? 'yes' : 'no')
// console.log( null ? 'yes' : 'no')
// console.log( NaN ? 'yes' : 'no')
// console.log( Infinity ? 'yes' : 'no')



// >>>> Operators (Precedence) <<<<

// console.log((7 + 8) / 2);
// console.log(3 > 2 && 4 < 5);
// console.log(3 > 2 || 4 < 5);
// console.log(3 > 2 > 1);
// console.log(true == 1);

// console.log(3 > 2 && 2 > 1);
// console.log(true && true);

// grouping                      ()
// negation and increment        ! ++ --
// multiplication and division   * /
// addition and subtraction      + -
// comparison                    < <= > >=
// equality                      == != === !==
// and                           && 
// or                            ||
// conditional                   ?:
// assignment                    = += -= *= %=


// console.log(7 + 8 / 2)
// console.log((7 + 8) / 2)
// console.log(3 > 2 && 4 < 10)
// console.log(3 < 2 || 4 < 10)
// console.log(6 < 2 || 4 > 10)
// console.log(3 > 2 > 1) // true == 1 false == 0
// console.log(3 > 2 && 2 > 1)
// console.log(true == 1) 
// console.log(true === 1) 


