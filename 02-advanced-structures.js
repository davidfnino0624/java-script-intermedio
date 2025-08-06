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

let words =  phrases.flatMap(phrase => phrase.split(' '))

console.log(words)

        // -Ordenacion

            // sort

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)

            // reverse

sorted.reverse()
console.log(sorted)

            // Busqueda

console.log(sorted.includes(4))
console.log(sorted.includes(5))

            // find
    
let firstEvenNumber = sorted.find(elementoz => elementoz % 2 === 0)

console.log(firstEvenNumber)

            // findIndex

let firstEvenIndex = sorted.findIndex(elementoz => elementoz % 2 === 0)

console.log(firstEvenIndex)


    // SetsAvanzados

        // - Operaciones

            // eliminacion de duplicados

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 7]
const numbersSet = [...new Set(numbersArray)]

console.log(numbersSet)

            // union

const setA = new Set ([1, 2, 3, 4])
const setB = new Set ([3, 4, 5, 6])

const union = new Set ([...setA, ...setB])

console.log (union)

            // Interseccion

const intercetionset = new Set ([...setA].filter(element => setB.has(element)))

console.log(intercetionset)

            // Diferencia

const diferencia = new Set([...setA].filter(element => !setB.has(element)))
console.log(diferencia)

            // convercion

console.log ([...setA])
console.log ([...setA, ...setB])

        // Iteracion

            //forEach

setA.forEach(element => console.log(element))

    // mapsAvanzados

let myMap = new Map([
    ['name', 'David'],
    ['position', 'CEO'],
    ['age', 25]
])

console.log(myMap)

myMap.forEach((valor,clave) => console.log(`${clave}:${valor}`))

        // conversion
            // mapa a Array

const arrayFromMap = Array.from(myMap)

console.log(arrayFromMap)

            //mapa a objeto

const objectoDeMap = Object.fromEntries(myMap)

console.log(objectoDeMap)

            //objeto a mapa

const mapFromObject = new Map(Object.entries(objectoDeMap))

console.log(mapFromObject)