// estructuras avanzadas

    // Arrays Avanzados

        // - Metodos Funcionales

            // for each

let numbers = [1,8,9,2,4,4]

numbers.forEach(elemento => console.log(elemento))

            // Map

let powedArray = numbers.map(elementox => elementox ** 2)

console.log(powedArray)

            // filter

let evenNumbers = numbers.filter(elementoy => elementoy % 2 === 0)

console.log(evenNumbers)

            // reduce

let result = numbers.reduce((previous, current) => previous + current,0)

let result2 = numbers.reduce((previous,current) =>
    previous * current)

console.log(result)

console.log(result2)

const sumaArray = (acumulador, currentIndex) => acumulador + currentIndex;

const sumaTotal = numbers.reduce(sumaArray,0)

console.log(sumaTotal)

        // -Manipulacion

            // flat

let nestedArray = [1,[2, 3,[4,[5]]]]

let flatArray = nestedArray.flat(4)

console.log(flatArray)

            // flatMap
        
let phrases = [`hola mundo`, `adios mundo`]

phrases.flatMap(phrase => phrase.split(' '))