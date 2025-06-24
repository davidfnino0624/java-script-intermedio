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