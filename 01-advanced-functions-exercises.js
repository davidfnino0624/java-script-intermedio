// 1. Crea una función que retorne a otra función

function calcularFactorial() {
    return function(x){
        let total = 1
        for (let r = x ; r > 1; r--){
        total *= r
        }
        console.log(`El total es ${total}`)
    }
}

const theFactorialNumber = calcularFactorial()

theFactorialNumber(5)

// 2. Implementa una función currificada que multiplique 3 números

function multiplyThreeNumbers(a){
    return function (b){
        return function (c){
            console.log(a * b * c)
        }
    }
}

multiplyThreeNumbers(3)(3)(2)

const sumAB = (multiplyThreeNumbers(3)(3))

sumAB(3)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function powOfThreeNumbers(numero, exponente) {
    if (exponente == 0){
        return 1
    }        
    return numero * powOfThreeNumbers(numero, exponente -1)
}

console.log(powOfThreeNumbers(3, 3));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), 
// decrement() y getValue(), utilizando un closure para mantener el estado

class Counter {
    constructor(count){
        this.count = count
    }
    increment(){
        this.count ++
    }
    decrement(){
        this.count --
    }
    getValue(){
        return this.count
    }


}

function createCounter(valorInicial) {
  return new Counter(valorInicial);
}

const contador1 = createCounter(0)

console.log(contador1.getValue())

contador1.increment()
contador1.increment()
contador1.increment()

console.log(contador1.getValue())

contador1.decrement()

console.log(contador1.getValue())


function createCounterClousure(valorInicial = 0) {
    let count = valorInicial;
    return { 
        increment(){
        count ++
        },
        decrement(){
        count --
        },
        getValue(){
            return count
        }
    }
}


const contador2 = createCounterClousure()

console.log(contador2.getValue())

contador2.increment()
contador2.increment()
contador2.increment()
contador2.increment()


console.log(contador2.getValue())

contador2.decrement()

console.log(contador2.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
    let total = 0;
    for(let number of numbers) {
        total += number
    }
    total *= multiplier;
    return total
}

console.log(sumManyTimes(2,3,2,2,5,5,5,5,5,5,5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumAllNumbers(callback, ...numbers1){
    let total = 0
    for(let number of numbers1) {
        total += number
    }
    callback(total)
}

function showTotal(value) {
    console.log(`El Total de la operacion es: ${value}`)
}

sumAllNumbers(showTotal,3,2,1,5,4,6)

// 7. Desarrolla una función parcial

function partialString(name) {
    return function (company){
        return function(){
            console.log(`hola mi nombre es ${name} y trabajo en ${company}`)
        }
    }
}

const partialData = partialString(`david`)

const partialData2 = partialData(`linkedin`)

partialData2()// se llama la ultima variable para que sea su ejecucion con el trace que ya tenia guardado

partialData(`google`)()
partialData(`amazon`)()


partialString (`David`)(`ubiquity`)() // si se deja de llamar a un argumento de alguna funcion, no va a ejecutarla y no muestra nada en la consola

// 8. Implementa un ejemplo que haga uso de Spread

let myArray = [{name:`david`, age:24}]
let myArray2 = [{name:`erik`, age:14}]

function spreadUsage(...array){
    console.log(array)
}


spreadUsage(myArray, myArray2)

// 9. Implementa un retorno implícito

const potencia = (a, b) => a**b

console.log(potencia(3,3))

// 10. Haz uso del this léxico

const moto = {
    make: `Suzuki`,
    model: `Gixxer 250`,
    sound: `Run Run`,
    greeting: function(){
        console.log(`La moto hace: ${this.sound}`)
    },
}

moto.greeting()



