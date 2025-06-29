// funciones avanzadas

// ciudadanos de pimera clase (cumple con las condiciones de un dato de cualquier tipo)

// Se pueden guardar en variables como un dato

const greet = function (name) {
    console.log(`Hola ${name}`)
}

greet(`david`)

// Se pueden usar como argumento de otra funcion

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting(){
    return greet
}

processGreeting(greet, `Erik`)
returnGreeting(`Rocio`)
const greet2 = returnGreeting()
greet2(`Jobani`)

// arrow funtions

const multiplicaciaon = (a, b) => a * b 
console.log(multiplicaciaon(5, 5))

// This lexico

const handler = {
    name: `David`,
    greeting: function() {
        console.log(`Hello ${this.name}`)
    },
    arrowGreeting:() => { // las arrow funtion crean su propio contexto y el this ya no hace referencia al nombre que esta dentro del objeto
        console.log(`hola, ${name1}`)
    }
}

handler.greeting();
//handler.arrowGreetinggreeting() // no se puede acceder a la funcion por el scope dentro del objeto o la clase

// IIFE (Immediately Invoked Function Expression)

// IIFE clasic
/*
(function () {
    console.log(`IIFE clasico`)
})();

// IIFE arrow

(() => {
    console.log(`IIFE arrow`)
})();
*/
// Parametros rest (...)

function sum(...numbers) {
    let total = 0;
    for(let index of numbers) {
        total += index
    }
    return total
}

console.log(sum(5, 3, 2, 45, 1))


// Operador spread (...)

const myNumbers = [6, 2, 4, 5]

function sumWithSpread (a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) 
console.log(sumWithSpread(...myNumbers))

// closures

function createCounter() {
    let counter = 0
    return function(){
        counter ++
        console.log(`la cuenta es ${counter}`)
    }
}

const contador = createCounter()

createCounter()

contador(); // Primera llamada a la función guardada
// Internamente, el 'counter' que recordaba (0) se vuelve 1.
// Imprime en consola: "la cuenta es 1"

contador(); // Segunda llamada a la misma función
// Internamente, el 'counter' que recordaba (1) se vuelve 2.
// Imprime en consola: "la cuenta es 2"

function factorial(x){
    let total = 1
    return function (x){
        for (let r = x ; r > 0; r--){
        total *= r
    }
    console.log(`el factorial del numero ${x} es: ${total}`)
    }
    
}

const thefactorial = factorial()

thefactorial(5)

// recursividad

function factorialRecursivo(n){
    if (n == 1){
        return 1
    }
    return n * factorialRecursivo(n - 1)

}

console.log(factorialRecursivo(5))

// Funciones parciales 

function partialSum(a){
    return function (b, c){
        return sum(a, b, c)
    }
}

const sumThis = partialSum(5)

console.log(sumThis(2, 3))
console.log(sumThis(4, 7))

// currying

function curryingSum(a){
    return function (b) {
        return function (c) {
            return function (d){
                return sum (a, b, c, d)
            }
        }
    }
} 

const sumAB = curryingSum(2)(7)
const sumC = sumAB(8)

//console.log (sumAB(44))
//console.log (sumAB(15))
console.log(sumAB(5)(5))
console.log (sumC(5))

// call back

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`El resultado de la suma es: ${result}`)
}

processData ([1,2,3], processResult)
processData ([1,2,3], processResult2)
processData ([1,2,3], (result) => {console.log(`El resultado con arrow function de la suma es: ${result}`)})

 